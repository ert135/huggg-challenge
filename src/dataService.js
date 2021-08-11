import * as fs from 'fs';
import * as path from 'path';

const MOCK_DATA_FILE_PATH = path.join(__dirname, './', 'DATA_MOCK.json');

const fetchData = () =>
    JSON.parse(fs.readFileSync(MOCK_DATA_FILE_PATH, 'utf8'));

export default fetchData;