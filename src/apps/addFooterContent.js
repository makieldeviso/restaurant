const addFooterContent = (function () {

    const createFooterContent = function () {
        const footNoteCont = document.createElement('div');
        footNoteCont.setAttribute('id', 'foot-note');

        const restoName = document.createElement('p');
        restoName.setAttribute('id', 'foot-resto-name');
        restoName.textContent = 'Heartbreak Pub';

        const createFootNote = function () {
            const newNote = document.createElement('p');
            newNote.setAttribute('class', 'note');
            
            return newNote;
        }

        // Foot Note 1
        const footNote1 = createFootNote();
        footNote1.textContent = 'This is a portfolio project Made for The Odin Project';

        // Foot Note 2
        const footNote2 = createFootNote();
        const noteIcon2 = '<i class="fa-regular fa-copyright"></i>';
        footNote2.innerHTML = `Copyright ${noteIcon2} 2023 - Fred Mark Baldeviso`;

        // Foot Note 3
        const footNote3 = createFootNote();
        const noteLink3 = document.createElement('a');
        const noteIcon3 = '<i class="fa-brands fa-github"></i>';
        noteLink3.setAttribute('href', 'https://github.com/makieldeviso');
        noteLink3.innerHTML = `makieldeviso ${noteIcon3}`;
        footNote3.appendChild(noteLink3);

        // Saves all content into an array
        // Note: Sequence is important
        const contentArray = [restoName, footNote1, footNote2, footNote3];

        // Appends contents to the container
        contentArray.forEach(content => footNoteCont.appendChild(content));

        // returns container with all contents inside
        return footNoteCont;
    }
    
    const appendFooterContent = function () {

        const footer = document.querySelector('footer');
        const footerContent = createFooterContent();

        // Creates End Marker
        const endMark = document.createElement('div');
        endMark.setAttribute('id', 'end-mark');

        // Appends the contents and the end marker to the footer
        footer.appendChild(footerContent);
        footer.appendChild(endMark);
    }

    return { appendFooterContent };
})();

export { addFooterContent };