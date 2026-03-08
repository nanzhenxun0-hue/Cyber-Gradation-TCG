/**
 * CYBER-GRADATION TCG: Core Game Engine
 * 対戦ロジック、AI、ガチャ、および状態管理
 */

import { CARD_DATA } from './data.js';

export const GameEngine = {
    // --- 1. デッキ・カード操作 ---
    
    // デッキをシャッフルする（フィッシャー・イェーツの手法）
    shuffle(deck) {
        const newDeck = [...deck];
        for (let i = newDeck.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [newDeck[i], newDeck[j]] = [newDeck[j], newDeck[i]];
        }
        return newDeck;
    },

    // カードを引く
    drawCard(deck, hand) {
        if (deck.length === 0) return { deck, hand, error: "DECK_OUT" };
        const newDeck = [...deck];
        const drawnCardId = newDeck.pop();
        const newHand = [...hand, CARD_DATA[drawnCardId]];
        return { deck: newDeck, hand: newHand };
    },

    // --- 2. バトルロジック ---

    // ダメージ計算（5分決着用の加速ロジック付き）
    calculateDamage(attacker, defender, turnCount) {
        let baseDamage = Math.max(0, attacker.atk - (defender ? defender.def : 0));
        
        // 6ターン目以降は「オーバークロック」によりダメージ2倍
        if (turnCount >= 6) {
            baseDamage *= 2;
        }
        return baseDamage;
    },

    // 特殊勝利判定 (Void属性：除外15枚)
    checkSpecialVictory(exileCount) {
        return exileCount >= 15;
    },

    // --- 3. AI思考ルーチン (チュートリアル/AI戦用) ---

    // AIの行動を決定する
    getAIMove(aiHand, aiHP, playerBoard) {
        // 1. コストが払えるカードを抽出
        const playable = aiHand.filter(card => card.cost < aiHP);
        if (playable.length === 0) return { action: "PASS" };

        // 2. 優先順位：挑発(Taunt)持ちユニット > 高ATKユニット > スペル
        playable.sort((a, b) => {
            if (a.ability === "Taunt") return -1;
            return b.atk - a.atk;
        });

        return { action: "PLAY", card: playable[0] };
    },

    // --- 4. 報酬・ガチャシステム ---

    // パック開封ロジック (UR: 1.5% / SR: 5.0%)
    openPack() {
        const pack = [];
        const rates = [
            { rarity: "UR", threshold: 1.5 },
            { rarity: "SR", threshold: 6.5 }, // 1.5 + 5.0
            { rarity: "R",  threshold: 21.5 }, // 6.5 + 15.0
            { rarity: "U",  threshold: 51.5 }, // 21.5 + 30.0
            { rarity: "C",  threshold: 100.0 }
        ];

        for (let i = 0; i < 5; i++) {
            const roll = Math.random() * 100;
            const rarity = rates.find(r => roll < r.threshold).rarity;
            
            // 指定レアリティの中からランダムに1枚抽出
            const pool = Object.values(CARD_DATA).filter(c => c.rarity === rarity);
            pack.push(pool[Math.floor(Math.random() * pool.length)]);
        }
        return pack;
    }
};

/**
 * プレイヤーの状態を管理するクラス（移籍先でのセーブ/ロード用）
 */
export class GameState {
    constructor() {
        this.playerHP = 50;
        this.enemyHP = 50;
        this.turn = 1;
        this.playerExileCount = 0;
        this.history = [];
    }

    // 行動ログの記録
    log(message) {
        this.history.push(`[Turn ${this.turn}] ${message}`);
        if (this.history.length > 5) this.history.shift(); // 最新5件のみ保持
    }
}
