
const backgroundClassNames = ['article', 'main-container', 'markdown-body', 'shadow', 'page__inner', 'blog-content-box',
    'ouvJEz', 'post-layout', 'Post-Main ', 'card-body ', 'List-item', 'QuestionAnswer-content', 'Card', 'article-area',
    , 'TopstoryItem-isRecommend', 'TopstoryItem', 'content-box', 'ContentItem', 'AnswerItem'];

backgroundClassNames.map(item => {
    if (document.getElementsByClassName(item)[0]) {
        document.getElementsByClassName(item)[0].style.background = '#bfffbf';
    }
})

const idNames = ['page-content', 'content', 'container', 'topics', 'gc-container'];

idNames.map(item => {
    if (document.getElementById(item)) {
        document.getElementById(item).style.background = '#bfffbf';
    }
})

document.getElementsByTagName('body')[0].style.background = '#bfffbf';







