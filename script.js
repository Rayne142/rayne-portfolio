// 网站交互脚本

// 导航栏高亮当前页面
document.addEventListener('DOMContentLoaded', function() {
    // 获取当前页面路径
    const currentPage = window.location.pathname.split('/').pop() || 'index.html';
    
    // 找到所有导航链接
    const navLinks = document.querySelectorAll('.nav-link');
    
    // 移除所有 active 类，然后为当前页面添加 active 类
    navLinks.forEach(link => {
        link.classList.remove('active');
        const linkPage = link.getAttribute('href').split('/').pop() || 'index.html';
        if (linkPage === currentPage) {
            link.classList.add('active');
        }
    });
});

// 平滑滚动（如果需要）
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        
        const targetId = this.getAttribute('href');
        if (targetId === '#') return;
        
        const targetElement = document.querySelector(targetId);
        if (targetElement) {
            targetElement.scrollIntoView({
                behavior: 'smooth'
            });
        }
    });
});

// 添加滚动时导航栏阴影效果
let lastScrollTop = 0;
const navbar = document.querySelector('.navbar');

window.addEventListener('scroll', function() {
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    
    if (scrollTop > lastScrollTop && scrollTop > 100) {
        // 向下滚动
        navbar.style.boxShadow = '0 2px 10px rgba(0,0,0,0.1)';
    } else {
        // 向上滚动
        if (scrollTop <= 100) {
            navbar.style.boxShadow = '0 2px 10px rgba(0,0,0,0.1)';
        }
    }
    
    lastScrollTop = scrollTop;
});

// 卡片悬停效果增强（可选）
document.querySelectorAll('.work-card, .stat-card, .project-card').forEach(card => {
    card.addEventListener('mouseenter', function() {
        this.style.transition = 'all 0.3s ease';
    });
});

// 控制台欢迎信息
console.log('%c🎮 Rayne 游戏策划作品集', 'font-size: 20px; font-weight: bold; color: #3498db;');
console.log('%c👋 欢迎查看我的作品集！', 'font-size: 14px; color: #2c3e50;');
console.log('%c📧 联系我：YIN_RQ@163.com', 'font-size: 12px; color: #95a5a6;');
