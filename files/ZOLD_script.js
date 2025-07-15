document.addEventListener('DOMContentLoaded', () => {
    lucide.createIcons();
    loadMarkdownContent();
});

async function loadMarkdownContent() {
    const markdownContainer = document.getElementById('markdown-content');
    if (!markdownContainer) {
        console.error('Markdown container not found.');
        return;
    }

    const filePath = 'china_sound_engineer_certification_and_industry_ecosystem_enhancement_plan.md';

    try {
        const response = await fetch(filePath);
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        const markdownText = await response.text();
        

        const contentWithoutFirstTitle = markdownText.substring(markdownText.indexOf('---'));

        markdownContainer.innerHTML = marked.parse(contentWithoutFirstTitle);
    } catch (error) {
        console.error('Error fetching or parsing markdown file:', error);
        markdownContainer.innerHTML = `
            <div class="text-center text-red-400">
                <p>无法加载方案文档内容。</p>
                <p>错误: ${error.message}</p>
            </div>
        `;
    }
}
