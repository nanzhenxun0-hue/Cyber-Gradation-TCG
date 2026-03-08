/**
 * CYBER-GRADATION TCG: Master Card Database
 * 全50枚のカード定義と属性別のスターター構成
 */

export const CARD_DATA = {
    // --- 汎用プロモ (P: 4種/各3枚) - AI報酬・全デッキ共通 ---
    "P-01": { id: "P-01", name: "リンク・ドロー", sector: "General", rarity: "P", cost: 5, type: "Spell", effect: "2枚引く", grad: "linear-gradient(135deg, #888, #eee)" },
    "P-02": { id: "P-02", name: "ノイズ・キャンセル", sector: "General", rarity: "P", cost: 3, type: "Spell", effect: "コスト2以下の敵効果無効", grad: "linear-gradient(135deg, #777, #ccc)" },
    "P-03": { id: "P-03", name: "システム・復旧", sector: "General", rarity: "P", cost: 0, type: "Spell", effect: "HP10回復", grad: "linear-gradient(135deg, #fff, #aaa)" },
    "P-04": { id: "P-04", name: "サーチ・ビット", sector: "General", rarity: "P", cost: 4, type: "Unit", atk: 2, def: 2, effect: "コスト3以下1枚サーチ", grad: "linear-gradient(135deg, #999, #bbb)" },

    // --- Volts (V: 8種) - 速攻・高火力 ---
    "V-01": { id: "V-01", name: "ラッシュ・ボット", sector: "Volts", rarity: "C", cost: 2, atk: 4, def: 1, type: "Unit", ability: "Rush", grad: "linear-gradient(135deg, #ff4500, #ff8c00)" },
    "V-02": { id: "V-02", name: "イグニッション", sector: "Volts", rarity: "C", cost: 3, type: "Spell", effect: "敵に5ダメ", grad: "linear-gradient(135deg, #ff0000, #ff4500)" },
    "V-03": { id: "V-03", name: "ヒート・シンク", sector: "Volts", rarity: "C", cost: 1, atk: 2, def: 3, type: "Unit", effect: "破壊時：敵に2ダメ", grad: "linear-gradient(135deg, #dc143c, #ff7f50)" },
    "V-04": { id: "V-04", name: "オーバー・ドライブ", sector: "Volts", rarity: "U", cost: 6, type: "Spell", effect: "全味方ATK+4", grad: "linear-gradient(135deg, #ff6347, #ffa500)" },
    "V-05": { id: "V-05", name: "プラズマ・ストライカー", sector: "Volts", rarity: "U", cost: 5, atk: 6, def: 2, type: "Unit", effect: "HP3消費：再攻撃", grad: "linear-gradient(135deg, #ff4500, #ffd700)" },
    "V-06": { id: "V-06", name: "ボルテージ・コア", sector: "Volts", rarity: "R", cost: 4, atk: 3, def: 5, type: "Unit", effect: "Voltsコスト-1", grad: "linear-gradient(135deg, #ff0000, #ffff00)" },
    "V-07": { id: "V-07", name: "閃光の撃墜王", sector: "Volts", rarity: "SR", cost: 8, atk: 10, def: 4, type: "Unit", ability: "Piercing", grad: "linear-gradient(135deg, #ff4500, #ffffff)" },
    "V-08": { id: "V-08", name: "太陽の崩壊", sector: "Volts", rarity: "UR", cost: 15, type: "Spell", effect: "全破壊＆HP半減", grad: "linear-gradient(135deg, #ff0000, #000000)" },

    // --- Logic (L: 8種) - 妨害・計算 ---
    "L-01": { id: "L-01", name: "フリーズ・コード", sector: "Logic", rarity: "C", cost: 2, type: "Spell", effect: "敵1体行動不能", grad: "linear-gradient(135deg, #00ced1, #2e8b57)" },
    "L-02": { id: "L-02", name: "データ・マイナー", sector: "Logic", rarity: "C", cost: 2, atk: 2, def: 2, type: "Unit", effect: "手札公開", grad: "linear-gradient(135deg, #40e0d0, #008080)" },
    "L-03": { id: "L-03", name: "バッファ・ウォール", sector: "Logic", rarity: "C", cost: 3, atk: 1, def: 6, type: "Unit", ability: "Taunt", grad: "linear-gradient(135deg, #00ffff, #4682b4)" },
    "L-04": { id: "L-04", name: "バイナリー・ステップ", sector: "Logic", rarity: "U", cost: 4, atk: 3, def: 3, type: "Unit", effect: "攻撃時：1ドロー", grad: "linear-gradient(135deg, #afeeee, #1e90ff)" },
    "L-05": { id: "L-05", name: "ロジック・ボム", sector: "Logic", rarity: "U", cost: 5, type: "Spell", effect: "最大ATK敵を破壊", grad: "linear-gradient(135deg, #0000ff, #00fa9a)" },
    "L-06": { id: "L-06", name: "思考の停滞", sector: "Logic", rarity: "R", cost: 6, type: "Spell", effect: "次ターン1枚制限", grad: "linear-gradient(135deg, #00ced1, #483d8b)" },
    "L-07": { id: "L-07", name: "サイバー・リヴァイアサン", sector: "Logic", rarity: "SR", cost: 9, atk: 7, def: 9, type: "Unit", effect: "スペル耐性", grad: "linear-gradient(135deg, #00ffff, #000080)" },
    "L-08": { id: "L-08", name: "時の静止", sector: "Logic", rarity: "UR", cost: 20, type: "Spell", effect: "ターン追加", grad: "linear-gradient(135deg, #00ffff, #ffffff)" },

    // --- Flux (F: 8種) - トリッキー・置換 ---
    "F-01": { id: "F-01", name: "ミラージュ・エッジ", sector: "Flux", rarity: "C", cost: 3, atk: 3, def: 2, type: "Unit", effect: "攻撃後：手札戻り", grad: "linear-gradient(135deg, #da70d6, #8a2be2)" },
    "F-02": { id: "F-02", name: "フェイク・データ", sector: "Flux", rarity: "C", cost: 2, type: "Spell", effect: "攻撃対象変更", grad: "linear-gradient(135deg, #ee82ee, #4b0082)" },
    "F-03": { id: "F-03", name: "シフト・ポーン", sector: "Flux", rarity: "C", cost: 2, atk: 2, def: 2, type: "Unit", effect: "破壊時：手札から展開", grad: "linear-gradient(135deg, #ba55d3, #9400d3)" },
    "F-04": { id: "F-04", name: "ワープ・ゲート", sector: "Flux", rarity: "U", cost: 4, type: "Spell", effect: "場と墓地の入れ替え", grad: "linear-gradient(135deg, #dda0dd, #800080)" },
    "F-05": { id: "F-05", name: "カメレオン", sector: "Flux", rarity: "U", cost: 4, atk: 0, def: 0, type: "Unit", effect: "正面の敵コピー", grad: "linear-gradient(135deg, #ff00ff, #e6e6fa)" },
    "F-06": { id: "F-06", name: "運命の書き換え", sector: "Flux", rarity: "R", cost: 5, type: "Spell", effect: "全員引き直し", grad: "linear-gradient(135deg, #ff1493, #8b008b)" },
    "F-07": { id: "F-07", name: "次元を喰らう者", sector: "Flux", rarity: "SR", cost: 7, atk: 5, def: 5, type: "Unit", effect: "敵ドロー毎にATK+2", grad: "linear-gradient(135deg, #c71585, #191970)" },
    "F-08": { id: "F-08", name: "カオス・パラドックス", sector: "Flux", rarity: "UR", cost: 10, type: "Spell", effect: "場・手札・墓地交換", grad: "linear-gradient(135deg, #ff00ff, #000000)" },

    // --- Aegis (A: 8種) - 防御・耐久 ---
    "A-01": { id: "A-01", name: "リペア・ドロイド", sector: "Aegis", rarity: "C", cost: 2, atk: 1, def: 4, type: "Unit", effect: "毎ターンHP2回復", grad: "linear-gradient(135deg, #32cd32, #ffd700)" },
    "A-02": { id: "A-02", name: "ソリッド・シェル", sector: "Aegis", rarity: "C", cost: 3, type: "Spell", effect: "DEF+5", grad: "linear-gradient(135deg, #adff2f, #daa520)" },
    "A-03": { id: "A-03", name: "ガーディアン・レイ", sector: "Aegis", rarity: "C", cost: 3, atk: 2, def: 5, type: "Unit", effect: "HP5消費で破壊耐性", grad: "linear-gradient(135deg, #00ff00, #b8860b)" },
    "A-04": { id: "A-04", name: "セーフティ・プロトコル", sector: "Aegis", rarity: "U", cost: 5, type: "Spell", effect: "このターン被ダメ0", grad: "linear-gradient(135deg, #9acd32, #ffff00)" },
    "A-05": { id: "A-05", name: "反射装甲の騎士", sector: "Aegis", rarity: "U", cost: 6, atk: 4, def: 6, type: "Unit", effect: "ダメ反射", grad: "linear-gradient(135deg, #228b22, #eee8aa)" },
    "A-06": { id: "A-06", name: "癒しの波紋", sector: "Aegis", rarity: "R", cost: 4, type: "Spell", effect: "全味方DEF全回復", grad: "linear-gradient(135deg, #7cfc00, #fafad2)" },
    "A-07": { id: "A-07", name: "不落の巨神", sector: "Aegis", rarity: "SR", cost: 10, atk: 6, def: 12, type: "Unit", effect: "本体ダメ-5", grad: "linear-gradient(135deg, #008000, #ffffed)" },
    "A-08": { id: "A-08", name: "生命の樹", sector: "Aegis", rarity: "UR", cost: 1, type: "Spell", effect: "HP全回復(1回)", grad: "linear-gradient(135deg, #00ff00, #ffffff)" },

    // --- Void (B: 8種) - 特殊・除外 ---
    "B-01": { id: "B-01", name: "ゼロ・ポインター", sector: "Void", rarity: "C", cost: 2, atk: 2, def: 2, type: "Unit", effect: "敵デッキ除外", grad: "linear-gradient(135deg, #f5f5f5, #000000)" },
    "B-02": { id: "B-02", name: "浸食する闇", sector: "Void", rarity: "C", cost: 3, type: "Spell", effect: "敵ATK-3", grad: "linear-gradient(135deg, #ffffff, #696969)" },
    "B-03": { id: "B-03", name: "墓標の回収者", sector: "Void", rarity: "C", cost: 2, atk: 3, def: 1, type: "Unit", effect: "除外を墓地へ戻す", grad: "linear-gradient(135deg, #dcdcdc, #2f4f4f)" },
    "B-04": { id: "B-04", name: "ブラック・ホール", sector: "Void", rarity: "U", cost: 7, type: "Spell", effect: "コスト4以下全除外", grad: "linear-gradient(135deg, #000000, #4b0082)" },
    "B-05": { id: "B-05", name: "虚無の執行者", sector: "Void", rarity: "U", cost: 5, atk: 4, def: 4, type: "Unit", effect: "除外数でATK増", grad: "linear-gradient(135deg, #000000, #708090)" },
    "B-06": { id: "B-06", name: "死の宣告", sector: "Void", rarity: "R", cost: 8, type: "Spell", effect: "3T後敵HPを1に", grad: "linear-gradient(135deg, #000000, #ff00ff)" },
    "B-07": { id: "B-07", name: "深淵の魔王", sector: "Void", rarity: "SR", cost: 9, atk: 8, def: 8, type: "Unit", effect: "墓地全除外", grad: "linear-gradient(135deg, #000000, #800080)" },
    "B-08": { id: "B-08", name: "終焉の特異点", sector: "Void", rarity: "UR", cost: 15, type: "Spell", effect: "除外15枚で勝利", grad: "linear-gradient(135deg, #000000, #ffffff)" },

    // --- パック専用 (S: 6種) - カスタム用 ---
    "S-01": { id: "S-01", name: "予備バッテリー", sector: "Special", rarity: "SR", cost: 0, type: "Spell", effect: "メモリ+5", grad: "linear-gradient(135deg, #ffd700, #ffffff)" },
    "S-02": { id: "S-02", name: "最後の手段", sector: "Special", rarity: "SR", cost: 0, type: "Spell", effect: "HP極低でコスト0", grad: "linear-gradient(135deg, #000000, #ff0000)" },
    "S-03": { id: "S-03", name: "ダブル・アクセル", sector: "Special", rarity: "SR", cost: 6, type: "Spell", effect: "次スペル2回発動", grad: "linear-gradient(135deg, #1e90ff, #ff8c00)" },
    "S-04": { id: "S-04", name: "リサイクル", sector: "Special", rarity: "R", cost: 4, type: "Spell", effect: "墓地スペル回収", grad: "linear-gradient(135deg, #32cd32, #8b4513)" },
    "S-05": { id: "S-05", name: "重力崩壊", sector: "Special", rarity: "R", cost: 5, type: "Spell", effect: "高ATK3体破壊", grad: "linear-gradient(135deg, #4b0082, #000000)" },
    "S-06": { id: "S-06", name: "クローン生成", sector: "Special", rarity: "R", cost: 5, type: "Spell", effect: "味方のコピー召喚", grad: "linear-gradient(135deg, #00ced1, #ffffff)" }
};

/**
 * スターターデッキ構成（各20枚）
 * Pカードは全ての属性に共通で含まれる汎用札
 */
export const STARTER_DECKS = {
    "Volts": ["V-01", "V-01", "V-01", "V-02", "V-02", "V-03", "V-03", "V-05", "V-05", "V-07", "P-01", "P-01", "P-01", "P-02", "P-02", "P-03", "P-03", "P-04", "P-04", "P-04"],
    "Logic": ["L-01", "L-01", "L-01", "L-02", "L-02", "L-03", "L-03", "L-04", "L-04", "L-07", "P-01", "P-01", "P-01", "P-02", "P-02", "P-03", "P-03", "P-04", "P-04", "P-04"],
    "Flux":  ["F-01", "F-01", "F-01", "F-02", "F-02", "F-03", "F-03", "F-05", "F-05", "F-07", "P-01", "P-01", "P-01", "P-02", "P-02", "P-03", "P-03", "P-04", "P-04", "P-04"],
    "Aegis": ["A-01", "A-01", "A-01", "A-02", "A-02", "A-03", "A-03", "A-05", "A-05", "A-07", "P-01", "P-01", "P-01", "P-02", "P-02", "P-03", "P-03", "P-04", "P-04", "P-04"],
    "Void":  ["B-01", "B-01", "B-01", "B-02", "B-02", "B-03", "B-03", "B-05", "B-05", "B-07", "P-01", "P-01", "P-01", "P-02", "P-02", "P-03", "P-03", "P-04", "P-04", "P-04"]
};
