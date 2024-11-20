import { spawn, ChildProcessWithoutNullStreams } from 'node:child_process';
import * as process from 'node:process';
import * as dotenv from 'dotenv';

const sendMsgUser = (type: 'log' | 'err') => {
    switch (type) {
        case 'log':
            console.log('БД успешно запущена :)');
            break;
        case 'err':
            console.log('БД не смогла запуститься :(');
            break;
    }
};

const startDb = () => {
    dotenv.config();

    const pgPath = process.env.POSTGRES_EXEC_DIR;
    const pgDataPath = process.env.PGDATA;
    const [, , type] = process.argv;

    let pg: ChildProcessWithoutNullStreams;
    switch (type) {
        case '--stop':
            pg = spawn(`${pgPath}/pg_ctl`, ['stop']);
            break;
        default:
            pg = spawn(`${pgPath}/postgres`, ['-D', pgDataPath]);
    }

    pg.on('spawn', sendMsgUser.bind(null, 'log'));
    pg.on('error', sendMsgUser.bind(null, 'err'));
}

try {
    startDb();
} catch (e) {
    sendMsgUser('err');
}
