import React from 'react';
import ReactDOM from 'react-dom';
import TestUtils from 'react/lib/ReactTestUtils';
import calendar from './App';

describe('calendar', () => {
    var result, props, event;

    beforeEach(()=>
    {
        props = {
            props = {
                comments: ["My New Event", "Exam"]
            },

            result = TestUtils.renderIntoDocument(<calendar{...props}/>),
            event = TestUtils.scryRenderedDOMComponentsWithTag()
        })

        it('Displays calendar page', ()=>
            expect(ReactDOM.findDOMNode(result).textContent).toContain('calendar');
            expect(ReactDOM.findDOMNode(result).textContent).toContain('calendar');
        })

        it('Allows Events to be appended to calendar', ()=>{
            expect(ReactDOM).findDOMNode(result).textContent.toContain('My New Event');
        },

        it('Allows Event Edits through resizing', ()=>{
            expect(ReactDOM).findDOMNode(result).textContent.toContain('resize');
        },

        it('Different Views can be accessed.', ()=>{
            expect(ReactDOM).findDOMNode(result).textContent.toContain('views');
        },

        it('Event frequencies can change', ()=>{
            expect(ReactDOM).findDOMNode(result).textContent.toContain('views');
        }
        
    })
});
