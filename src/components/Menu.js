import React from 'react';

import {
  Accordion,
  AccordionItem,
  AccordionItemHeading,
  AccordionItemButton,
  AccordionItemPanel,
} from 'react-accessible-accordion';
import 'react-accessible-accordion/dist/fancy-example.css';

function Menu(props) {
  const languages = Object.keys(props.playState.languages);
  const changeLesson = (e, lang, section, lesson) => {
    props.setPlayState({
      languages: {
        ...props.playState.languages
      },
      progress: {
        path: lang,
        section: section,
        lesson: lesson,
        time: props.playState.languages[lang][section][lesson].time
      }
    })
  }

  return (
    <Accordion allowZeroExpanded>
      {languages.map(lang => {
        const sections = Object.keys(props.playState.languages[lang]);
        return (
          <AccordionItem>
            <AccordionItemHeading>
                <AccordionItemButton>
                  <h3>{lang}</h3>
                  {/* {lang} */}
                </AccordionItemButton>
            </AccordionItemHeading>
            <AccordionItemPanel>
              {sections.map(section => {
                const lessons = Object.keys(props.playState.languages[lang][section])
                return (
                  <React.Fragment>
                    <h4>
                      {section}
                    </h4>
                    <ul>
                      {lessons.map(lesson =>
                        <li
                          onClick={e => { changeLesson(e, lang, section, lesson) }}
                        >
                          {lesson}
                        </li>
                      )}
                    </ul>
                  </React.Fragment>
                )
              })}
            </AccordionItemPanel>
          </AccordionItem>
        )
      })}
    </Accordion>
  );
}

export default Menu;