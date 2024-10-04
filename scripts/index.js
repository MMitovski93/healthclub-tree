//selectors
const copyRightYear = document.querySelector('.main-content__copyright-year');
const shareBtns = document.querySelectorAll('.main-content__links-list__share-btn');


//event listeners
document.addEventListener('DOMContentLoaded', () => {
    let date = new Date();
    copyRightYear.textContent = date.getFullYear();
    // window.location.href = 'https://healthclubshop.com/product/2-slim-and-beauty/'
});

shareBtns.forEach(btn => {
    btn.addEventListener('click', async (e) => {
        e.preventDefault();
        const link = btn.parentElement.getAttribute('href');
        try {
            await navigator.clipboard.writeText(link)
        } catch (err) {
            console.error(err)
        }
    });
});