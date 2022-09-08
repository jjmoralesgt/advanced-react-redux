import React from "react";
import { mount } from "enzyme";
import moxios from "moxios";
import Root from "Root";
import App from "components/App";

beforeEach(() => {
    moxios.install();
    moxios.stubRequest('http://jsonplaceholder.typicode.com/comments', {
        status: 200,
        response: [{name: 'Fetched #1'}, {name: 'Fetched #2'}]
    });
});

afterEach(() => {
    moxios.uninstall();
});

it('can fetch a list of comments and display them', (done) => {
    //Atemte to rednder the entire app
    const wrapped = mount(
        <Root>
            <App />
        </Root>
    );


    //find the fetchComments button and click it
    wrapped.find('.fetch-comments').simulate('click');

    // eslint-disable-next-line testing-library/await-async-utils
    moxios.wait(() => {    
        wrapped.update();
        expect(wrapped.find('li').length).toEqual(2);
        done();
        wrapped.unmount();
    });
});