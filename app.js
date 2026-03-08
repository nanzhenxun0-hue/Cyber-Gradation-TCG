/**
 * CYBER-GRADATION TCG: Main Application Controller
 * 全てのモジュールを統合し、ゲーム進行を管理する
 */

import { CARD_DATA, STARTER_DECKS } from './data.js';
import { GameEngine, GameState } from './engine.js';

class CyberTCG {
    constructor() {
        this.state = new GameState();
        this.playerInventory = [];
        this.currentDeck = [];
        this.currentPhase = 'LOADING';
        
        this.init();
    }

    async init() {
        console.log("System Booting...");
        // セーブデータの読み込み（移籍先がブラウザならLocalStorage）
        this.loadGame();
        
        if (this.playerInventory.length === 0) {
            this.showDeckSelection();
        } else {
            this.showMainMenu();
        }
    }

    // --- 1. デッキ選択フェーズ ---
    showDeckSelection() {
        this.currentPhase = 'SELECTION';
        console.log("セクターを選択してください...");
        // 実際にはここでUIManagerを通じてボタンを表示
        // 例: onSelectSector('Volts') が呼ばれるのを待つ
    }

    onSelectSector(sectorName) {
        console.log(`${sectorName}を選択しました。スターターキットを転送中...`);
        const cardIds = STARTER_DECKS[sectorName];
        
        // データのインスタンス化
        this.playerInventory = cardIds.map(id => ({ ...CARD_DATA[id] }));
        this.currentDeck = GameEngine.shuffle(cardIds);
        
        this.saveGame();
        this.startTutorial(sectorName);
    }

    // --- 2. チュートリアル・バトルフェーズ ---
    startTutorial(sector) {
        this.currentPhase = 'TUTORIAL';
        this.state.log(`${sector}チュートリアル開始`);
        
        // 最初のターンの処理
        this.startTurn();
    }

    startTurn() {
        this.state.turn++;
        // カードを引く
        const result = GameEngine.drawCard(this.currentDeck, this.state.playerHand || []);
        if (result.error) {
            this.endGame("DECK_OUT");
            return;
        }
        this.state.playerHand = result.hand;
        this.state.log("カードをドローしました。");
        
        this.render(); // 画面更新
    }

    // --- 3. アクション実行 ---
    playCard(cardId, slotIndex) {
        const card = CARD_DATA[cardId];
        
        // コスト（HP）支払い
        if (this.state.playerHP > card.cost) {
            this.state.playerHP -= card.cost;
            this.state.log(`${card.name}をプレイ！(コスト:${card.cost})`);
            
            // チュートリアル中なら次ステップへ
            if (this.currentPhase === 'TUTORIAL') {
                this.checkTutorialProgress(cardId);
            }
        } else {
            this.state.log("エネルギー不足です。");
        }
        this.render();
    }

    // --- 4. パック開封 ---
    handleOpenPack() {
        console.log("パックを解析中...");
        const newCards = GameEngine.openPack();
        this.playerInventory.push(...newCards.map(c => c.id));
        this.saveGame();
        
        return newCards; // UI側でアニメーション表示するために返す
    }

    // --- 5. システム管理 ---
    saveGame() {
        const data = {
            inventory: this.playerInventory,
            isCleared: this.state.isTutorialCleared
        };
        localStorage.setItem('cyber_tcg_save', JSON.stringify(data));
    }

    loadGame() {
        const saved = localStorage.getItem('cyber_tcg_save');
        if (saved) {
            const parsed = JSON.parse(saved);
            this.playerInventory = parsed.inventory;
        }
    }

    // 画面描画のトリガー（実際のDOM操作はUI用クラスに任せるのが完璧）
    render() {
        console.log(`Current HP: ${this.state.playerHP} | Turn: ${this.state.turn}`);
        // UIManager.update(this.state);
    }
}

// アプリの起動
const App = new CyberTCG();
export default App;
