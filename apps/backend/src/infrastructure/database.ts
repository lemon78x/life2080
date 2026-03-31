import Database from 'better-sqlite3';
import * as path from 'path';

const DB_PATH = process.env.DATABASE_PATH || path.join(__dirname, '../../data/life2080.db');

// data 디렉터리가 없으면 자동 생성
import * as fs from 'fs';
const dataDir = path.dirname(DB_PATH);
if (!fs.existsSync(dataDir)) {
  fs.mkdirSync(dataDir, { recursive: true });
}

export const db = new Database(DB_PATH);

// WAL 모드 활성화 (성능 향상)
db.pragma('journal_mode = WAL');
db.pragma('foreign_keys = ON');

export const setupDatabase = async () => {
  try {
    // 연결 테스트 (간단한 쿼리 실행)
    db.prepare('SELECT 1').get();
    console.log('Successfully connected to SQLite');
    console.log(`Database path: ${DB_PATH}`);
  } catch (error) {
    console.error('Error connecting to SQLite:', error);
    throw error;
  }
};
