// تهيئة تأثيرات التمرير
document.addEventListener('DOMContentLoaded', function() {
    // تهيئة مكتبة AOS للتأثيرات البصرية عند التمرير
    AOS.init({
        duration: 800,
        easing: 'ease-in-out',
        once: true,
        mirror: false
    });

    // تهيئة مقاييس تقييم الخيارات
    const optionMeters = document.querySelectorAll('.option-meter-fill');
    optionMeters.forEach(meter => {
        const width = meter.style.width;
        meter.style.width = '0';
        setTimeout(() => {
            meter.style.width = width;
        }, 300);
    });

    // إضافة سلوك التمرير السلس للروابط
    document.querySelectorAll('a[href*="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            const targetId = this.getAttribute('href').split('#')[1];
            if (targetId) {
                const targetElement = document.getElementById(targetId);
                if (targetElement) {
                    e.preventDefault();
                    window.scrollTo({
                        top: targetElement.offsetTop - 100,
                        behavior: 'smooth'
                    });
                }
            }
        });
    });

    // إضافة سلوك النقر على بطاقات الأقسام الرئيسية
    document.querySelectorAll('.card').forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.classList.add('shadow');
        });
        card.addEventListener('mouseleave', function() {
            this.classList.remove('shadow');
        });
    });

    // إنشاء الرسم البياني للتوصية الرئيسية في الصفحة الرئيسية
    const recommendationChartElement = document.getElementById('recommendationChart');
    if (recommendationChartElement) {
        const ctx = recommendationChartElement.getContext('2d');
        new Chart(ctx, {
            type: 'bar',
            data: {
                labels: ['الحل الودي', 'الدعوى القضائية', 'شكوى هيئة المنافسة', 'بلاغ النيابة العامة'],
                datasets: [{
                    label: 'احتمالية النجاح',
                    data: [65, 60, 75, 40],
                    backgroundColor: [
                        'rgba(74, 123, 167, 0.7)',
                        'rgba(74, 123, 167, 0.7)',
                        'rgba(74, 123, 167, 0.7)',
                        'rgba(74, 123, 167, 0.7)'
                    ],
                    borderColor: [
                        'rgba(26, 54, 93, 1)',
                        'rgba(26, 54, 93, 1)',
                        'rgba(26, 54, 93, 1)',
                        'rgba(26, 54, 93, 1)'
                    ],
                    borderWidth: 1
                }]
            },
            options: {
                responsive: true,
                maintainAspectRatio: false,
                scales: {
                    y: {
                        beginAtZero: true,
                        max: 100,
                        ticks: {
                            callback: function(value) {
                                return value + '%';
                            }
                        }
                    }
                },
                plugins: {
                    legend: {
                        display: false
                    },
                    tooltip: {
                        callbacks: {
                            label: function(context) {
                                return context.parsed.y + '%';
                            }
                        }
                    }
                }
            }
        });
    }
});
