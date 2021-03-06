const path = require("path");
const winston = require("winston");
const clfDate = require("clf-date");
require("winston-daily-rotate-file");

const infofile = new winston.transports.DailyRotateFile({
    level: "info",
    filename: path.resolve(process.env.EPHEMERAL_LOGS_PATH, "GOLDMUND-API-ROTATION-%DATE%-info.log"),
    datePattern: "YYYY-MM-DD",
    frequency: "1d",
    zippedArchive: true,
    maxSize: "20m",
    maxFiles: "6d" 
});

// infofile.on("rotate", function(oldFilename, newFilename) {
// });

const logger = winston.createLogger({
    transports: [infofile]
});

// create stream obj
logger.stream = {
    write: function(message, encoding) {
        logger.info(message);
    }
};

logger.combinedFormat = function(err, req, res) {
    // [FORMAT] :remote-addr - :remote-user [:date[clf]] ":method :url HTTP/:http-version" :status :res[content-length] ":referrer" ":user-agent"
    return `${req.ip} - - [${clfDate(
        new Date()
    )}] \"${req.method} ${req.originalUrl} HTTP/${req.httpVersion}\" ${err.status ||
        500} - ${req.headers["user-agent"]}`;
};

module.exports = { winstonRotations: logger };