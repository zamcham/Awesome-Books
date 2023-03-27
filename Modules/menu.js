export default function setupMenu() {
    const menu = document.getElementById('navLinks');
    const menuLinks = menu.children;
  
    for (let i = 0; i < menuLinks.length; i += 1) {
      // We add an event listener to each menu link
      menuLinks[i].addEventListener('click', () => {
        console.log("clicked!");
        // We get the text of the link (name) to use it as parameter
        const textValue = menuLinks[i].textContent;
        // we need to make the textValue without spaces and make it lowercase
        const noSpacesString = textValue.replace(/\s+/g, '').toLowerCase();
        const container = document.getElementById(noSpacesString);
        // If the cliked is the one showing we do nothing
        if (!container.classList.contains('hidden')) {
          return;
        }
        // else, we hide it
  
        container.classList.toggle('hidden');
  
        // We get all the containers in the body
        const allContainers = document.querySelectorAll('.contentSection');
        // We only show the one that doesn't have 'hidden' class
        allContainers.forEach((c) => {
          if (c !== container && !c.classList.contains('hidden')) {
            c.classList.toggle('hidden');
          }
        });
      });
    }
  }
  