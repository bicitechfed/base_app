import Config from 'react-native-config';

console.log('APP_NODE_DEV', Config.APP_NODE_DEV);

type AppNodeType = 'dev' | 'pro';

const APP_NODE_DEV: AppNodeType = Config.APP_NODE_DEV as AppNodeType;

const apiMap = {
  dev: 'http://zysco.test.bicisims.com',
  pro: 'http://42.225.115.106:50002',
};

const wsUrlMap = {
  dev: 'ws://139.9.160.196:50004/ws',
  pro: 'ws://42.225.115.106:50004/ws',
};

const messageWsUrlMap = {
  dev: 'ws://47.96.159.115:51088/message/socket/',
  pro: 'ws://42.225.115.106:51088/message/socket/',
};

export const BASE_URL = apiMap[APP_NODE_DEV];

export const CONKPIT_URI =
  APP_NODE_DEV == 'dev'
    ? 'http://zysco.test.bicisims.com'
    : 'http://42.225.115.106:8000';

export const API_URL = apiMap[APP_NODE_DEV] + '/api';

export const wsUrl = wsUrlMap[APP_NODE_DEV];

export const messageWsUrl = messageWsUrlMap[APP_NODE_DEV];

// 基于 jsencrypt 的 RSA 验证私匙
export const privateKey =
  'MIGfMA0GCSqGSIb3DQEBAQUAA4GNADCBiQKBgQCvJGaiiS3oLK9QXgm1jpzKe3g4jKRu0zXWqjaazh9NW13vdMcu3ctKT2+GqV9I7FMBgP69p9LX1hOXoSmagYB5Qku1Vrjx03mjnhcYaCleJzv7vksb8Rsx/Dd8pRCVoYvjsgawYB+oxnvlHKvk7d/XuHCOY02Tod21KpsBQ6Z9AwIDAQAB';
