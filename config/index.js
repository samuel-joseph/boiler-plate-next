const dev = process.env.NODE_ENV !== "production";


//https://yourwebsite.com is your own domain name for this website
export const server = dev ? "http://localhost:3000" : "https://yourwebsite.com";
