import { createLogger } from '../logger';

it('shold return stored logs', () => {
    expect(logger.getLogs()).toEqual([]);
});