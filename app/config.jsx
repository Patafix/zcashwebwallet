/**
 * Configuration
 * @module config
 */
const config = {

};
if (process.env.NODE_ENV === "development") {
    config.API_ENDPOINT = "http://localhost:8081";
}
export default config;
