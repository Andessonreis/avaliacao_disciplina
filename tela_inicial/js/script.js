function changeSection(sectionName) {
    const tabs = document.querySelectorAll('.tab');
    const sections = document.querySelectorAll('.section');

    tabs.forEach(tab => tab.classList.remove('active'));
    sections.forEach(section => section.classList.remove('active'));

    const tab = document.querySelector(`.tab.${sectionName}`);
    const section = document.querySelector(`.section.${sectionName}`);

    if (tab && section) {
        tab.classList.add('active');
        section.classList.add('active');
    }
}
