// Type declaration stub for nodemailer (replaces @types/nodemailer)
declare module "nodemailer" {
  interface TestAccount {
    user: string;
    pass: string;
    smtp: { host: string; port: number; secure: boolean };
    pop3: { host: string; port: number; secure: boolean };
    imap: { host: string; port: number; secure: boolean };
  }

  interface TransportOptions {
    host?: string;
    port?: number;
    secure?: boolean;
    auth?: { user: string; pass: string };
    [key: string]: unknown;
  }

  interface MailOptions {
    from?: string;
    to?: string | string[];
    subject?: string;
    html?: string;
    text?: string;
    [key: string]: unknown;
  }

  interface Transporter {
    sendMail(options: MailOptions): Promise<unknown>;
  }

  function createTransport(options: TransportOptions): Transporter;
  function createTestAccount(): Promise<TestAccount>;
  function getTestMessageUrl(info: unknown): string | false;

  export default { createTransport, createTestAccount, getTestMessageUrl };
}
