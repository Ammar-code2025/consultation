// إضافة تفاعلات للرسوم البيانية
document.addEventListener('DOMContentLoaded', function() {
    // تهيئة مكتبة AOS للتأثيرات البصرية عند التمرير
    AOS.init({
        duration: 800,
        easing: 'ease-in-out',
        once: true,
        mirror: false
    });

    // إضافة تفاعلات للرسوم البيانية SVG
    const svgElements = document.querySelectorAll('img.interactive-svg');
    svgElements.forEach(svg => {
        svg.addEventListener('mouseenter', function() {
            this.style.transform = 'scale(1.02)';
            this.style.transition = 'transform 0.3s ease';
            this.style.boxShadow = '0 10px 20px rgba(0,0,0,0.1)';
        });
        
        svg.addEventListener('mouseleave', function() {
            this.style.transform = 'scale(1)';
            this.style.boxShadow = 'none';
        });
    });

    // إضافة تفاعلات للبطاقات
    const cards = document.querySelectorAll('.card');
    cards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.classList.add('shadow-lg');
            this.style.transform = 'translateY(-5px)';
            this.style.transition = 'transform 0.3s ease, box-shadow 0.3s ease';
        });
        
        card.addEventListener('mouseleave', function() {
            this.classList.remove('shadow-lg');
            this.style.transform = 'translateY(0)';
        });
    });

    // إضافة تفاعلات لمقاييس تقييم الخيارات
    const optionMeters = document.querySelectorAll('.option-meter-fill');
    optionMeters.forEach(meter => {
        const width = meter.style.width;
        meter.style.width = '0';
        setTimeout(() => {
            meter.style.width = width;
            meter.style.transition = 'width 1.5s ease-in-out';
        }, 300);
    });

    // إضافة تفاعلات للتسلسل الزمني
    const timelineItems = document.querySelectorAll('.timeline-item');
    timelineItems.forEach((item, index) => {
        item.style.opacity = '0';
        item.style.transform = 'translateY(20px)';
        setTimeout(() => {
            item.style.opacity = '1';
            item.style.transform = 'translateY(0)';
            item.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
        }, 300 + (index * 200));
    });

    // إضافة تفاعلات لجدول المقارنة
    const tableRows = document.querySelectorAll('.comparison-table tr');
    tableRows.forEach((row, index) => {
        if (index > 0) { // تجاهل صف العنوان
            row.addEventListener('mouseenter', function() {
                this.style.backgroundColor = 'rgba(74, 123, 167, 0.1)';
                this.style.transition = 'background-color 0.3s ease';
            });
            
            row.addEventListener('mouseleave', function() {
                this.style.backgroundColor = '';
            });
        }
    });

    // إضافة تفاعلات للأسئلة الشائعة
    const faqItems = document.querySelectorAll('.faq-item');
    faqItems.forEach(item => {
        const question = item.querySelector('.faq-question');
        const answer = item.querySelector('.faq-answer');
        
        question.addEventListener('click', function() {
            answer.classList.toggle('show');
            question.classList.toggle('active');
            
            if (answer.classList.contains('show')) {
                answer.style.maxHeight = answer.scrollHeight + 'px';
            } else {
                answer.style.maxHeight = '0';
            }
        });
    });

    // إضافة تفاعلات للقائمة الرئيسية
    const navLinks = document.querySelectorAll('.navbar-nav .nav-link');
    navLinks.forEach(link => {
        link.addEventListener('mouseenter', function() {
            if (!this.classList.contains('active')) {
                this.style.color = '#ADC6E6';
                this.style.transition = 'color 0.3s ease';
            }
        });
        
        link.addEventListener('mouseleave', function() {
            if (!this.classList.contains('active')) {
                this.style.color = '';
            }
        });
    });

    // إضافة تفاعلات للأزرار
    const buttons = document.querySelectorAll('.btn-primary, .btn-secondary');
    buttons.forEach(button => {
        button.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-2px)';
            this.style.boxShadow = '0 4px 8px rgba(0,0,0,0.1)';
            this.style.transition = 'transform 0.3s ease, box-shadow 0.3s ease';
        });
        
        button.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0)';
            this.style.boxShadow = '';
        });
    });
});
