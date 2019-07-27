function scroll_to_section(section_name){
    const section = document.getElementById(section_name);
    section.scrollIntoView({behavior: "smooth", block: "start", inline: "nearest"});
}

function isInViewport(elem) {
    var bounding = elem.getBoundingClientRect();
    return (
        bounding.top >= 0 &&
        bounding.left >= 0 &&
        bounding.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        bounding.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
};

window.onscroll = () => {
    const sections = ['summary', 'skills', 'experience', 'education'];
    const html_sections = sections.map(section => document.getElementById(section));

    const on_view = [];

    for(const section of html_sections){
        if(isInViewport(section)){
            on_view.push(section.id);
        }
    }

    let found = false;

    for(const section of sections){
        if(found){
            document.querySelector(`a[href*="${section}"]`).classList.remove('active');
        }

        if(!on_view.includes(section)){
            document.querySelector(`a[href*="${section}"]`).classList.remove('active');
        }

        if(on_view.includes(section) && !found){
            document.querySelector(`a[href*="${section}"]`).classList.add('active');
            found = true;
        }
    }

    if(on_view.length)
        console.log('Currently in view: ', on_view);
}