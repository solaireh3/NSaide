(function() {
    'use strict';

    window.NSModuleRegistry.register({
        id: 'commentShortcut',
        name: '评论快捷键',
        description: '添加评论框快捷键支持',

        init() {
            document.addEventListener('keydown', (e) => {
                if (e.ctrlKey && e.key === 'Enter') {
                    const editor = document.querySelector('.md-editor');
                    if (!editor) return;
                    
                    const submitBtn = editor.querySelector('button.submit');
                    if (submitBtn) {
                        e.preventDefault();
                        submitBtn.click();
                    }
                }
            });
        }
    });
})(); 