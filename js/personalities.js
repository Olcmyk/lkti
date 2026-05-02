// 30个性格数据和精灵映射
const personalityData = {
  '保守': {
    name: '保守',
    stats: '+魔攻 -物攻',
    pet: '彩虹独角兽',
    icon: 'spirit_icons/NO117_彩虹独角兽.png',
    description: '',
    traits: '你谨慎稳重，不喜欢冒险。如同彩虹独角兽，你更擅长用智慧和魔法力量解决问题。'
  },
  '稳重': {
    name: '稳重',
    stats: '+魔攻 -物防',
    pet: '伊兰龙',
    icon: 'spirit_icons/NO204_伊兰龙.png',
    description: '',
    traits: '你成熟可靠，做事有条不紊。像伊兰龙一样，你用强大的魔法攻击展现你的实力。'
  },
  '马虎': {
    name: '马虎',
    stats: '+魔攻 -魔防',
    pet: '海枝枝',
    icon: 'spirit_icons/NO220_海枝枝.png',
    description: '',
    traits: '你做事大大咧咧，不拘小节。但像海枝枝一样，你的爆发力和创造力不容忽视。'
  },
  '冷静': {
    name: '冷静',
    stats: '+魔攻 -速度',
    pet: '深蓝鲸',
    icon: 'spirit_icons/NO273_深蓝鲸.png',
    description: '',
    traits: '你遇事不慌，善于分析。如同深蓝鲸，你用冷静的头脑和强大的魔法力量应对一切。'
  },
  '认真': {
    name: '认真',
    stats: '+魔攻 -生命',
    pet: '伊雷龙',
    icon: 'spirit_icons/NO203_伊雷龙.png',
    description: '',
    traits: '你对待事情一丝不苟，追求完美。像伊雷龙一样，你愿意付出代价来达到最强的输出。'
  },
  '固执': {
    name: '固执',
    stats: '+物攻 -魔攻',
    pet: '烈火战神',
    icon: 'spirit_icons/NO007_烈火战神.png',
    description: '',
    traits: '你坚持己见，一旦决定就会全力以赴。如同烈火战神的强大物理攻击，你用行动证明自己的决心。'
  },
  '孤僻': {
    name: '孤僻',
    stats: '+物攻 -物防',
    pet: '恶魔红钻',
    icon: 'spirit_icons/NO215_恶魔红钻.png',
    description: '',
    traits: '你喜欢独来独往，不善于防守自己的内心。但像恶魔红钻一样，你的攻击力不容小觑。'
  },
  '调皮': {
    name: '调皮',
    stats: '+物攻 -魔防',
    pet: '瞌睡王',
    icon: 'spirit_icons/NO075_瞌睡王.png',
    description: '',
    traits: '你活泼好动，喜欢恶作剧。像瞌睡王一样，你用自己的方式给周围带来欢乐和惊喜。'
  },
  '勇敢': {
    name: '勇敢',
    stats: '+物攻 -速度',
    pet: '雪巨人',
    icon: 'spirit_icons/NO136_雪巨人.png',
    description: '',
    traits: '你无畏挑战，敢于面对困难。如同雪巨人，你在关键时刻能爆发出惊人的力量。'
  },
  '坦率': {
    name: '坦率',
    stats: '+物攻 -生命',
    pet: '针叶巡林',
    icon: 'spirit_icons/NO155_针叶巡林.png',
    description: '',
    traits: '你直来直去，不喜欢拐弯抹角。像针叶巡林一样，你用直接的攻击表达自己。'
  },
  '沉着': {
    name: '沉着',
    stats: '+魔防 -物攻',
    pet: '千棘海针',
    icon: 'spirit_icons/NO078_千棘海针.png',
    description: '',
    traits: '你镇定自若，不轻易动摇。像千棘海针一样，你用强大的魔法防御和持续能力应对挑战。'
  },
  '慎重': {
    name: '慎重',
    stats: '+魔防 -魔攻',
    pet: '布克棱岩',
    icon: 'spirit_icons/NO029_布克棱岩.png',
    description: '',
    traits: '你做事谨慎，三思而后行。如同布克棱岩的高双防，你用周全的考虑保护自己。'
  },
  '温顺': {
    name: '温顺',
    stats: '+魔防 -物防',
    pet: '里拉鳐',
    icon: 'spirit_icons/NO219_里拉鳐.png',
    description: '',
    traits: '你性格温和，与人为善。像里拉鳐一样，你用柔和的方式达成自己的目标。'
  },
  '狂妄': {
    name: '狂妄',
    stats: '+魔防 -速度',
    pet: '水泡壳',
    icon: 'spirit_icons/NO014_水泡壳.png',
    description: '',
    traits: '你自信满满，甚至有些自负。但如同水泡壳，你确实有强大的魔法防御作为底气。'
  },
  '实干': {
    name: '实干',
    stats: '+魔防 -生命',
    pet: '红绒十字',
    icon: 'spirit_icons/NO257_红绒十字.png',
    description: '',
    traits: '你注重实际行动，不喜欢空谈。像红绒十字一样，你用实际的控制和防御能力证明自己。'
  },
  '大胆': {
    name: '大胆',
    stats: '+物防 -物攻',
    pet: '嗜波螺',
    icon: 'spirit_icons/NO173_嗜波螺.png',
    description: '',
    traits: '你敢作敢为，不怕失败。如同嗜波螺的坚硬外壳，你用勇气保护自己和他人。'
  },
  '淘气': {
    name: '淘气',
    stats: '+物防 -魔攻',
    pet: '迷嶂布莱克',
    icon: 'spirit_icons/NO029_迷嶂布莱克.png',
    description: '',
    traits: '你古灵精怪，喜欢搞怪。像迷嶂布莱克一样，你用厚实的防御和独特的方式应对世界。'
  },
  '悠闲': {
    name: '悠闲',
    stats: '+物防 -速度',
    pet: '波多西',
    icon: 'spirit_icons/NO223_波多西.png',
    description: '',
    traits: '你从容不迫，享受当下。像波多西一样，你不急不躁，用坚实的防御面对一切。'
  },
  '懒散': {
    name: '懒散',
    stats: '+物防 -魔防',
    pet: '烈火守护',
    icon: 'spirit_icons/NO218_烈火守护.png',
    description: '',
    traits: '你喜欢慢节奏的生活，不喜欢被催促。如同烈火守护，你用自己的节奏享受生活。'
  },
  '害羞': {
    name: '害羞',
    stats: '+物防 -生命',
    pet: '权杖-Ⅴ',
    icon: 'spirit_icons/NO146_权杖_Ⅴ.png',
    description: '',
    traits: '你内向腼腆，不善于表达自己。但如同权杖-Ⅴ，你用坚实的防御保护自己的内心。'
  },
  '胆小': {
    name: '胆小',
    stats: '+速度 -物攻',
    pet: '酷拉',
    icon: 'spirit_icons/NO206_酷拉.png',
    description: '',
    traits: '你谨慎小心，容易紧张。但如同酷拉的高速度，你懂得用速度和灵活性保护自己。'
  },
  '开朗': {
    name: '开朗',
    stats: '+速度 -魔攻',
    pet: '霜翼领主',
    icon: 'spirit_icons/NO020_霜翼领主.png',
    description: '',
    traits: '你乐观积极，充满活力。像霜翼领主一样，你用快速的行动和积极的态度面对生活。'
  },
  '急躁': {
    name: '急躁',
    stats: '+速度 -物防',
    pet: '噼啪鸟',
    icon: 'spirit_icons/NO272_噼啪鸟.png',
    description: '',
    traits: '你性子急，做事风风火火。如同噼啪鸟的快速节奏，你总是迫不及待地行动。'
  },
  '天真': {
    name: '天真',
    stats: '+速度 -魔防',
    pet: '影狸',
    icon: 'spirit_icons/NO124_影狸.png',
    description: '',
    traits: '你单纯善良，对世界充满好奇。像影狸一样，你用快速的行动探索这个世界。'
  },
  '浮躁': {
    name: '浮躁',
    stats: '+速度 -生命',
    pet: '荆棘电环',
    icon: 'spirit_icons/NO209_荆棘电环.png',
    description: '',
    traits: '你心绪不定，难以安静下来。如同荆棘电环的快速轮转，你总是在不停地变化和移动。'
  },
  '沉默': {
    name: '沉默',
    stats: '+生命 -物攻',
    pet: '鳗尾兽',
    icon: 'spirit_icons/NO202_鳗尾兽.png',
    description: '',
    traits: '你是一个内敛而坚韧的人，不喜欢张扬，但拥有强大的生命力和耐力。就像鳗尾兽一样，你能在困境中坚持下去。'
  },
  '平和': {
    name: '平和',
    stats: '+生命 -魔攻',
    pet: '火焰猿',
    icon: 'spirit_icons/NO251_火焰猿.png',
    description: '',
    traits: '你性格温和平静，不争不抢，像火焰猿一样稳重可靠。你更注重防守和持久，而非一时的爆发。'
  },
  '理智': {
    name: '理智',
    stats: '+生命 -物防',
    pet: '黑猫密探',
    icon: 'spirit_icons/NO122_黑猫密探.png',
    description: '',
    traits: '你善于冷静分析，用理性思考问题。像黑猫密探一样，你懂得在关键时刻做出正确的判断。'
  },
  '犹豫': {
    name: '犹豫',
    stats: '+生命 -魔防',
    pet: '九幽菇',
    icon: 'spirit_icons/NO176_九幽菇.png',
    description: '',
    traits: '你做事容易犹豫不决，但正如九幽菇的生命厚度，你的谨慎也是一种保护自己的方式。'
  },
  '紧张': {
    name: '紧张',
    stats: '+生命 -速度',
    pet: '圣剑骑士',
    icon: 'spirit_icons/NO286_圣剑骑士.png',
    description: '',
    traits: '你做事谨慎小心，虽然节奏较慢，但生命力顽强。像圣剑骑士一样，你能承受压力并坚持到最后。'
  }
};

// 所有性格名称列表
const allPersonalities = Object.keys(personalityData);
