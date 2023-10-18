import {describe, it} from 'vitest'
import {render} from '@testing-library/react';
import Board from "./page";

describe('Board test', () => {

    it('render the app', () => {
        render(Board());
    })
})