// 塔罗牌数据 - 22张大阿卡纳牌
const tarotCards = [
    {
        name: "魔术师",
        number: "I",
        meaning: "你拥有创造奇迹的潜能。现在是行动的好时机，你的意志力和创造力将帮助你实现目标。相信自己的能力。",
        advice: "运用你的技能和资源，大胆开始新计划。保持专注和决心，成功将属于你。",
        emoji: "🧙"
    },
    {
        name: "女祭司",
        number: "II",
        meaning: "直觉和智慧在召唤你。有些事情需要静待时机，内在的声音会指引你正确的方向。",
        advice: "相信你的直觉，有时候沉默比言语更有力量。保持神秘感，让事情自然发展。",
        emoji: "🔮"
    },
    {
        name: "皇后",
        number: "III",
        meaning: "丰收、创造力和女性力量的象征。你的付出将结出硕果，人际关系和谐美满。",
        advice: "拥抱生活中的美好，关爱自己和他人。这是创造和享受成果的时候。",
        emoji: "👑"
    },
    {
        name: "皇帝",
        number: "IV",
        meaning: "权威、稳定和控制力的体现。你需要建立秩序，制定规则，承担起领导责任。",
        advice: "保持坚定和自律，用你的智慧去规划未来。建立稳固的基础。",
        emoji: "🤴"
    },
    {
        name: "教皇",
        number: "V",
        meaning: "传统、指导和精神追求。你可能需要寻求建议或遵循已建立的道路和智慧。",
        advice: "向有经验的人学习，保持开放的心态接受指导和传统价值。",
        emoji: "⛪"
    },
    {
        name: "恋人",
        number: "VI",
        meaning: "爱情、选择和关系的和谐。重要的人际关系正在形成或深化，需要用心经营。",
        advice: "在关系中保持真诚和沟通。重要的选择需要用心去感受，而不仅是理性分析。",
        emoji: "💕"
    },
    {
        name: "战车",
        number: "VII",
        meaning: "胜利、意志力和前进的动力。你的决心将带你克服障碍，达成目标。",
        advice: "保持方向明确，勇往直前。运用你的意志力去驾驭各种力量。",
        emoji: "⚔️"
    },
    {
        name: "力量",
        number: "VIII",
        meaning: "内在力量、勇气和温柔的力量。真正的力量来自于内心的平静和慈悲。",
        advice: "以温柔和耐心对待挑战。你的内在力量比表面的力量更强大。",
        emoji: "🦁"
    },
    {
        name: "隐者",
        number: "IX",
        meaning: "内省、寻求真理和智慧。现在是时候独处，深入思考人生的方向。",
        advice: "暂时远离喧嚣，向内寻找答案。真理往往在寂静中显现。",
        emoji: "🏮"
    },
    {
        name: "命运之轮",
        number: "X",
        meaning: "变化、循环和命运的转折。生活正在发生变化，这些变化是成长的一部分。",
        advice: "接受变化，顺应自然的节奏。好的时光和坏的时光都是暂时的。",
        emoji: "🎡"
    },
    {
        name: "正义",
        number: "XI",
        meaning: "公平、真理和责任。你的行为将产生相应的结果，保持诚实和公正。",
        advice: "做出平衡的选择，为自己的决定负责。真相终将大白。",
        emoji: "⚖️"
    },
    {
        name: "倒吊人",
        number: "XII",
        meaning: "暂停、牺牲和新的视角。有时候需要放下控制，从不同的角度看问题。",
        advice: "耐心等待，这个暂停是为了更好的前进。放下执着，你会看到新的可能性。",
        emoji: "🧘"
    },
    {
        name: "死神",
        number: "XIII",
        meaning: "结束、转变和重生。旧的事物正在结束，为新的开始腾出空间。",
        advice: "拥抱改变，不要抗拒。结束意味着新的开始正在到来。",
        emoji: "💀"
    },
    {
        name: "节制",
        number: "XIV",
        meaning: "平衡、节制和和谐。找到中间道路，避免极端。",
        advice: "保持生活的平衡，适度是关键。调和各种对立的力量。",
        emoji: "⚖️"
    },
    {
        name: "恶魔",
        number: "XV",
        meaning: "诱惑、束缚和物质欲望。注意你被什么所困，什么在控制你的选择。",
        advice: "认清束缚你的事物，你有能力打破枷锁。选择自由而不是欲望。",
        emoji: "👿"
    },
    {
        name: "高塔",
        number: "XVI",
        meaning: "剧变、觉醒和真相揭露。突然的改变可能会打破旧有结构，但带来觉醒。",
        advice: "保持开放的心态面对改变。真相可能令人震撼，但终将带来解放。",
        emoji: "⚡"
    },
    {
        name: "星星",
        number: "XVII",
        meaning: "希望、灵感和精神指引。在黑暗中你找到了光明，梦想正在成真。",
        advice: "保持希望，相信宇宙的指引。你的愿望具有强大的力量。",
        emoji: "⭐"
    },
    {
        name: "月亮",
        number: "XVIII",
        meaning: "直觉、幻象和潜意识。有些事情还不明朗，需要倾听内心的声音。",
        advice: "相信你的直觉，表面之下有更深层的真相。不要被表象迷惑。",
        emoji: "🌙"
    },
    {
        name: "太阳",
        number: "XIX",
        meaning: "成功、快乐和积极能量。阳光普照，一切都会变得明朗美好。",
        advice: "享受当下的喜悦，你的未来充满光明。分享你的快乐。",
        emoji: "☀️"
    },
    {
        name: "审判",
        number: "XX",
        meaning: "觉醒、重生和救赎。是时候回顾过去，做出重要的人生决定。",
        advice: "聆听内心的声音，做出正确的选择。重生需要勇气和决心。",
        emoji: "🔔"
    },
    {
        name: "世界",
        number: "XXI",
        meaning: "完成、圆满和成就。你已经完成了一个重要的循环，即将开始新的旅程。",
        advice: "庆祝你的成就，世界在你脚下。新的冒险正等待着你。",
        emoji: "🌍"
    },
    {
        name: "愚者",
        number: "0",
        meaning: "新的开始、天真和冒险。带着纯洁的心踏上未知的旅程。",
        advice: "保持开放和乐观，勇敢迈出第一步。有时候，不知道反而是一种祝福。",
        emoji: "🎪"
    }
];

// 页面元素
const mainPage = document.getElementById('mainPage');
const divinationPage = document.getElementById('divinationPage');
const resultPage = document.getElementById('resultPage');
const cardGrid = document.getElementById('cardGrid');
const userQuestion = document.getElementById('userQuestion');

// 背景动画初始化
function initBackground() {
    const stars = document.getElementById('stars');
    const particles = document.getElementById('particles');

    // 创建星星
    for (let i = 0; i < 30; i++) {
        const star = document.createElement('div');
        star.className = 'star';
        star.style.width = Math.random() * 3 + 1 + 'px';
        star.style.height = star.style.width;
        star.style.left = Math.random() * 100 + '%';
        star.style.top = Math.random() * 100 + '%';
        star.style.animationDelay = Math.random() * 3 + 's';
        stars.appendChild(star);
    }

    // 创建粒子
    for (let i = 0; i < 15; i++) {
        const particle = document.createElement('div');
        particle.className = 'particle';
        particle.style.left = Math.random() * 100 + '%';
        particle.style.animationDelay = Math.random() * 15 + 's';
        particle.style.animationDuration = (15 + Math.random() * 10) + 's';
        particles.appendChild(particle);
    }
}

// 页面切换函数
function showPage(page) {
    mainPage.classList.add('hidden');
    divinationPage.classList.add('hidden');
    resultPage.classList.add('hidden');
    page.classList.remove('hidden');
    window.scrollTo(0, 0);
}

function startDivination() {
    showPage(divinationPage);
    createCardSelection();
}

function backToMain() {
    showPage(mainPage);
    // 清空输入
    if (userQuestion) userQuestion.value = '';
}

// 创建卡牌选择网格
function createCardSelection() {
    cardGrid.innerHTML = '';

    // 从22张牌中随机选择9张（3x3网格）
    const shuffled = [...tarotCards].sort(() => Math.random() - 0.5);
    const selectedCards = shuffled.slice(0, 9);

    selectedCards.forEach((card, index) => {
        const cardElement = document.createElement('div');
        cardElement.className = 'tarot-card';
        cardElement.innerHTML = card.emoji;
        cardElement.onclick = () => selectCard(card, cardElement);

        // 添加延迟动画
        cardElement.style.opacity = '0';
        cardElement.style.transform = 'translateY(20px)';
        setTimeout(() => {
            cardElement.style.transition = 'all 0.5s ease';
            cardElement.style.opacity = '1';
            cardElement.style.transform = 'translateY(0)';
        }, index * 50);

        cardGrid.appendChild(cardElement);
    });
}

// 选择卡牌
function selectCard(card, element) {
    // 移除之前的选择
    document.querySelectorAll('.tarot-card').forEach(el => {
        el.classList.remove('selected');
    });

    // 标记当前选择
    element.classList.add('selected');

    // 延迟后显示结果
    setTimeout(() => {
        showResult(card);
    }, 600);
}

// 显示结果
function showResult(card) {
    // 获取用户问题
    const question = userQuestion.value.trim();

    // 更新结果页面内容
    document.getElementById('cardName').textContent = card.name;
    document.getElementById('cardNumber').textContent = card.number;
    document.getElementById('cardTitle').textContent = `你抽到了：${card.name}`;
    document.getElementById('cardMeaning').textContent = card.meaning;
    document.getElementById('cardAdvice').textContent = card.advice;

    // 如果用户输入了问题，添加个性化回应
    if (question) {
        const meaningElement = document.getElementById('cardMeaning');
        meaningElement.textContent = `关于你的问题 "${question}"，` + card.meaning;
    }

    showPage(resultPage);

    // 滚动到顶部
    window.scrollTo(0, 0);
}

// 页面加载完成后初始化
document.addEventListener('DOMContentLoaded', function() {
    initBackground();
    console.log('🔮 神秘塔罗 - 已加载');
    console.log('祝您占卜愉快，愿指引之光照亮您的道路');
});

// 键盘支持
document.addEventListener('keydown', function(e) {
    if (e.key === 'Escape') {
        if (!resultPage.classList.contains('hidden')) {
            backToMain();
        } else if (!divinationPage.classList.contains('hidden')) {
            backToMain();
        }
    }
});