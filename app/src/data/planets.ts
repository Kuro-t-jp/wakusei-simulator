export const planetsData = [
    {
        id: "sun",
        name: "太陽",
        nameEn: "Sun",
        radius: 4, // 視覚的なスケール調整のため現実の比率とは異なります
        distance: 0,
        orbitSpeed: 0,
        rotationSpeed: 0.002,
        color: "#FDB813",
        description: "太陽系の中心にある恒星。巨大なプラズマの球で、太陽系全体の質量の99.8%以上を占める。",
        features: ["表面温度: 約5,500℃", "中心温度: 約1,500万℃", "年齢: 約46億年"]
    },
    {
        id: "mercury",
        name: "水星",
        nameEn: "Mercury",
        radius: 0.4,
        distance: 7,
        orbitSpeed: 0.04,
        rotationSpeed: 0.01,
        color: "#A9A9A9",
        description: "太陽に最も近い惑星。大気がほとんどなく、昼夜の温度差が非常に激しい。",
        features: ["公転周期: 約88日", "昼の温度: 約430℃", "夜の温度: 約-170℃"]
    },
    {
        id: "venus",
        name: "金星",
        nameEn: "Venus",
        radius: 0.9,
        distance: 10,
        orbitSpeed: 0.015,
        rotationSpeed: -0.005, // 逆回転
        color: "#EED053",
        description: "地球のすぐ内側を回る惑星。厚い二酸化炭素の大気に覆われ、強力な温室効果により太陽系で最も高温な惑星となっている。",
        features: ["公転周期: 約225日", "表面温度: 約460℃", "自転の向きが他の多くの惑星と逆"]
    },
    {
        id: "earth",
        name: "地球",
        nameEn: "Earth",
        radius: 1,
        distance: 14,
        orbitSpeed: 0.01,
        rotationSpeed: 0.02,
        color: "#2B82C9",
        description: "私たちが住む緑と水の豊かな惑星。現在のところ、液体の水と生命の存在が確認されている唯一の天体。",
        features: ["公転周期: 約365日", "衛星: 1つ（月）", "表面の約71%が海"]
    },
    {
        id: "mars",
        name: "火星",
        nameEn: "Mars",
        radius: 0.5,
        distance: 18,
        orbitSpeed: 0.008,
        rotationSpeed: 0.02,
        color: "#D14A28",
        description: "表面が酸化鉄（赤錆）で覆われた赤い惑星。かつては液体の水が存在した痕跡が多数見つかっている。",
        features: ["公転周期: 約687日", "衛星: 2つ（フォボス、ダイモス）", "太陽系最大の火山（オリンポス山）が存在"]
    },
    {
        id: "jupiter",
        name: "木星",
        nameEn: "Jupiter",
        radius: 2.2,
        distance: 26,
        orbitSpeed: 0.002,
        rotationSpeed: 0.04,
        color: "#C88B3A",
        description: "太陽系で最も巨大なガス惑星。水素とヘリウムが主成分で、特徴的な縞模様と大赤斑（巨大な嵐）を持つ。",
        features: ["公転周期: 約12年", "衛星の数が非常に多い（確認済90個以上）", "強力な磁場を持つ"]
    },
    {
        id: "saturn",
        name: "土星",
        nameEn: "Saturn",
        radius: 1.8,
        distance: 36,
        orbitSpeed: 0.0009,
        rotationSpeed: 0.038,
        color: "#E2BF7D",
        description: "無数の氷や岩の塊からなる美しく巨大な環（リング）を持つガス惑星。水に浮くほど密度が低い。",
        features: ["公転周期: 約29.5年", "最も目立つ環を持つ", "最大の衛星タイタンには大気がある"]
    },
    {
        id: "uranus",
        name: "天王星",
        nameEn: "Uranus",
        radius: 1.2,
        distance: 46,
        orbitSpeed: 0.0004,
        rotationSpeed: -0.025, // 逆回転
        color: "#4EACC1",
        description: "自転軸がほぼ横倒し（約98度）になっている氷の巨大惑星。メタンを含む大気のため青緑色に見える。",
        features: ["公転周期: 約84年", "横倒しの自転軸", "ダイヤモンドの雨が降る可能性が指摘されている"]
    },
    {
        id: "neptune",
        name: "海王星",
        nameEn: "Neptune",
        radius: 1.15,
        distance: 54,
        orbitSpeed: 0.0001,
        rotationSpeed: 0.026,
        color: "#353D94",
        description: "太陽系の一番外側を公転する青い巨大氷惑星。太陽系内で最も強い風（音速を超える暴風）が吹いている。",
        features: ["公転周期: 約165年", "美しい深い青色の大気", "発見前に計算により存在が予測された"]
    }
];

export type PlanetData = typeof planetsData[0];
