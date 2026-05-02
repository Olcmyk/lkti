// 30个性格数据和精灵映射
const personalityData = {
  '沉默': {
    name: '沉默',
    stats: '+生命 -物攻',
    pet: '鳗尾兽',
    icon: 'spirit_icons/NO202_鳗尾兽.png',
    description: '生命290极端突出，几乎就是"生命性格"的代表。',
    traits: '你是一个内敛而坚韧的人，不喜欢张扬，但拥有强大的生命力和耐力。就像鳗尾兽一样，你能在困境中坚持下去。'
  },
  '平和': {
    name: '平和',
    stats: '+生命 -魔攻',
    pet: '迷迷箱怪',
    icon: 'spirit_icons/NO211_迷迷箱怪.png',
    description: '生命138、双防153，偏肉盾/陷阱感，适合生命向。',
    traits: '你性格温和平静，不争不抢，像迷迷箱怪一样稳重可靠。你更注重防守和持久，而非一时的爆发。'
  },
  '理智': {
    name: '理智',
    stats: '+生命 -物防',
    pet: '雪影娃娃',
    icon: 'spirit_icons/NO144_雪影娃娃.png',
    description: '生命130、魔防130，更像偏特防/控制的生命型。',
    traits: '你善于冷静分析，用理性思考问题。像雪影娃娃一样，你懂得在关键时刻做出正确的判断和控制。'
  },
  '忧郁': {
    name: '忧郁',
    stats: '+生命 -魔防',
    pet: '石冠王蜥',
    icon: 'spirit_icons/NO026_石冠王蜥.png',
    description: '刺肤反伤需要站得住，生命加成能强化"挨打反制"。',
    traits: '你内心敏感细腻，容易陷入沉思。但正如石冠王蜥的反伤机制，你的敏感也是一种保护自己的方式。'
  },
  '紧张': {
    name: '紧张',
    stats: '+生命 -速度',
    pet: '鳗尾兽',
    icon: 'spirit_icons/NO202_鳗尾兽.png',
    description: '生命极高、速度不关键，紧张这类"慢血牛"性格最合适。',
    traits: '你做事谨慎小心，虽然节奏较慢，但生命力顽强。像鳗尾兽一样，你能承受压力并坚持到最后。'
  },
  '固执': {
    name: '固执',
    stats: '+物攻 -魔攻',
    pet: '烈火战神',
    icon: 'spirit_icons/NO007_烈火战神.png',
    description: '物攻175、魔攻84，物攻端明显更突出，是固执的标志性人选。',
    traits: '你坚持己见，一旦决定就会全力以赴。如同烈火战神的强大物理攻击，你用行动证明自己的决心。'
  },
  '孤僻': {
    name: '孤僻',
    stats: '+物攻 -物防',
    pet: '霜翼领主',
    icon: 'spirit_icons/NO020_霜翼领主.png',
    description: '物攻142，特性"破空"吃先手伤害，偏进攻而不是硬抗。',
    traits: '你喜欢独来独往，不善于防守自己的内心。但像霜翼领主一样，你的攻击力不容小觑。'
  },
  '调皮': {
    name: '调皮',
    stats: '+物攻 -魔防',
    pet: '瞌睡王',
    icon: 'spirit_icons/NO075_瞌睡王.png',
    description: '物攻157、生命和物防都厚，适合偏莽的物攻代表。',
    traits: '你活泼好动，喜欢恶作剧。像瞌睡王一样，你用自己的方式给周围带来欢乐和惊喜。'
  },
  '勇敢': {
    name: '勇敢',
    stats: '+物攻 -速度',
    pet: '蒲公英娃娃',
    icon: 'spirit_icons/NO070_蒲公英娃娃.png',
    description: '自带"勇敢"特性，技能能耗大于3时威力提升，性格和特性名字、打法都很贴。',
    traits: '你无畏挑战，敢于面对困难。如同蒲公英娃娃，你在关键时刻能爆发出惊人的力量。'
  },
  '坦率': {
    name: '坦率',
    stats: '+物攻 -生命',
    pet: '布克棱岩',
    icon: 'spirit_icons/NO029_布克棱岩.png',
    description: '物攻135、物防159、魔防150，偏厚重物攻地系，生命减益还能靠高双防兜底。',
    traits: '你直来直去，不喜欢拐弯抹角。像布克棱岩一样，你用坚实的防御和直接的攻击表达自己。'
  },
  '保守': {
    name: '保守',
    stats: '+魔攻 -物攻',
    pet: '圣水守护',
    icon: 'spirit_icons/NO010_圣水守护.png',
    description: '典型魔攻水系，物攻不是核心，适合把输出压到魔攻端。',
    traits: '你谨慎稳重，不喜欢冒险。如同圣水守护，你更擅长用智慧和魔法力量解决问题。'
  },
  '稳重': {
    name: '稳重',
    stats: '+魔攻 -物防',
    pet: '伊兰龙',
    icon: 'spirit_icons/NO204_伊兰龙.png',
    description: '魔攻高到190，主打魔攻爆发，降低物防是高风险换输出。',
    traits: '你成熟可靠，做事有条不紊。像伊兰龙一样，你用强大的魔法攻击展现你的实力。'
  },
  '马虎': {
    name: '马虎',
    stats: '+魔攻 -魔防',
    pet: '酷拉',
    icon: 'spirit_icons/NO206_酷拉.png',
    description: '高速双攻型，拿魔攻补爆发，牺牲一部分魔防。',
    traits: '你做事大大咧咧，不拘小节。但像酷拉一样，你的爆发力和创造力不容忽视。'
  },
  '冷静': {
    name: '冷静',
    stats: '+魔攻 -速度',
    pet: '圣水守护',
    icon: 'spirit_icons/NO010_圣水守护.png',
    description: '不是极限抢速位，更适合稳扎稳打的魔攻输出。',
    traits: '你遇事不慌，善于分析。如同圣水守护，你用冷静的头脑和强大的魔法力量应对一切。'
  },
  '认真': {
    name: '认真',
    stats: '+魔攻 -生命',
    pet: '伊雷龙',
    icon: 'spirit_icons/NO203_伊雷龙.png',
    description: '适合"魔攻最大化"的龙系代表，生命减益相对偏冒险。',
    traits: '你对待事情一丝不苟，追求完美。像伊雷龙一样，你愿意付出代价来达到最强的输出。'
  },
  '大胆': {
    name: '大胆',
    stats: '+物防 -物攻',
    pet: '水泡壳',
    icon: 'spirit_icons/NO014_水泡壳.png',
    description: '缩壳特性契合防御技能，物防路线很直观。',
    traits: '你敢作敢为，不怕失败。如同水泡壳的坚硬外壳，你用勇气保护自己和他人。'
  },
  '淘气': {
    name: '淘气',
    stats: '+物防 -魔攻',
    pet: '迷嶂布莱克',
    icon: 'spirit_icons/NO029_迷嶂布莱克.png',
    description: '',
    traits: '你古灵精怪，喜欢搞怪。像迷嶂布莱克一样，你用厚实的防御和独特的方式应对世界。'
  },
  '懒散': {
    name: '懒散',
    stats: '+物防 -魔防',
    pet: '瞌睡王',
    icon: 'spirit_icons/NO075_瞌睡王.png',
    description: '"懒散感"最强的精灵之一，生命144、物攻157、物防135，代表性很足。',
    traits: '你喜欢慢节奏的生活，不喜欢被催促。如同瞌睡王，你用自己的节奏享受生活。'
  },
  '悠闲': {
    name: '悠闲',
    stats: '+物防 -速度',
    pet: '布克棱岩',
    icon: 'spirit_icons/NO029_布克棱岩.png',
    description: '低速厚盾，物防159，速度本来不是核心。',
    traits: '你从容不迫，享受当下。像布克棱岩一样，你不急不躁，用坚实的防御面对一切。'
  },
  '害羞': {
    name: '害羞',
    stats: '+物防 -生命',
    pet: '权杖-Ⅴ',
    icon: 'spirit_icons/NO146_权杖_Ⅴ.png',
    description: '物防、魔防都是136，走偏物防机械位也说得通。',
    traits: '你内向腼腆，不善于表达自己。但如同权杖-Ⅴ，你用坚实的防御保护自己的内心。'
  },
  '沉着': {
    name: '沉着',
    stats: '+魔防 -物攻',
    pet: '魔力猫',
    icon: 'spirit_icons/NO004_魔力猫.png',
    description: '续航草系代表，氧循环回血，魔防151，本来就很适合做特防续航位。',
    traits: '你镇定自若，不轻易动摇。像魔力猫一样，你用强大的魔法防御和持续能力应对挑战。'
  },
  '慎重': {
    name: '慎重',
    stats: '+魔防 -魔攻',
    pet: '布克棱岩',
    icon: 'spirit_icons/NO029_布克棱岩.png',
    description: '双防很高，走纯承伤时不太依赖魔攻。',
    traits: '你做事谨慎，三思而后行。如同布克棱岩的高双防，你用周全的考虑保护自己。'
  },
  '温顺': {
    name: '温顺',
    stats: '+魔防 -物防',
    pet: '幻影灵菇',
    icon: 'spirit_icons/NO023_幻影灵菇.png',
    description: '魔防136，靠"毒蘑菇"偷能量，偏功能站场。',
    traits: '你性格温和，与人为善。像幻影灵菇一样，你用柔和的方式达成自己的目标。'
  },
  '狂妄': {
    name: '狂妄',
    stats: '+魔防 -速度',
    pet: '水泡壳',
    icon: 'spirit_icons/NO014_水泡壳.png',
    description: '缩壳系防御技能减能耗，速度不是核心，适合慢速特防壳。',
    traits: '你自信满满，甚至有些自负。但如同水泡壳，你确实有强大的魔法防御作为底气。'
  },
  '实干': {
    name: '实干',
    stats: '+魔防 -生命',
    pet: '雪影冰灵',
    icon: 'spirit_icons/NO144_雪影冰灵.png',
    description: '魔防130，进场冻结控场，适合功能防守位。',
    traits: '你注重实际行动，不喜欢空谈。像雪影冰灵一样，你用实际的控制和防御能力证明自己。'
  },
  '胆小': {
    name: '胆小',
    stats: '+速度 -物攻',
    pet: '酷拉',
    icon: 'spirit_icons/NO206_酷拉.png',
    description: '速度125，抢先手价值高；物攻、魔攻都能用，但可按魔攻/功能高速位理解。',
    traits: '你谨慎小心，容易紧张。但如同酷拉的高速度，你懂得用速度和灵活性保护自己。'
  },
  '开朗': {
    name: '开朗',
    stats: '+速度 -魔攻',
    pet: '霜翼领主',
    icon: 'spirit_icons/NO020_霜翼领主.png',
    description: '速度115、物攻142，且"破空"先手增伤，开朗非常贴。',
    traits: '你乐观积极，充满活力。像霜翼领主一样，你用快速的行动和积极的态度面对生活。'
  },
  '急躁': {
    name: '急躁',
    stats: '+速度 -物防',
    pet: '电球咩咩',
    icon: 'spirit_icons/NO068_电球咩咩.png',
    description: '速度125，"快充"离场回能，适合高速节奏位。',
    traits: '你性子急，做事风风火火。如同电球咩咩的快速节奏，你总是迫不及待地行动。'
  },
  '天真': {
    name: '天真',
    stats: '+速度 -魔防',
    pet: '圣羽翼王',
    icon: 'spirit_icons/NO152_圣羽翼王.png',
    description: '速度125、整体面板高，适合高速翼系代表。',
    traits: '你单纯善良，对世界充满好奇。像圣羽翼王一样，你用快速的行动探索这个世界。'
  },
  '浮躁': {
    name: '浮躁',
    stats: '+速度 -生命',
    pet: '荆棘电环',
    icon: 'spirit_icons/NO209_荆棘电环.png',
    description: '速度120，且行动后脱离，浮躁感和高速轮转很贴。',
    traits: '你心绪不定，难以安静下来。如同荆棘电环的快速轮转，你总是在不停地变化和移动。'
  }
};

// 所有性格名称列表
const allPersonalities = Object.keys(personalityData);
