import JSEncrypt from 'jsencrypt';
// 基于 jsencrypt 的 RSA 验证私匙
export const privateKey =
  'MIGfMA0GCSqGSIb3DQEBAQUAA4GNADCBiQKBgQCvJGaiiS3oLK9QXgm1jpzKe3g4jKRu0zXWqjaazh9NW13vdMcu3ctKT2+GqV9I7FMBgP69p9LX1hOXoSmagYB5Qku1Vrjx03mjnhcYaCleJzv7vksb8Rsx/Dd8pRCVoYvjsgawYB+oxnvlHKvk7d/XuHCOY02Tod21KpsBQ6Z9AwIDAQAB';

export const tranRSA = (params: string) => {
  const jsencrypt = new JSEncrypt({});
  jsencrypt.setPublicKey(privateKey);
  return jsencrypt.encrypt(params);
};
