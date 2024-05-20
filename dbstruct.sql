CREATE TABLE users (
    userID INTEGER PRIMARY KEY,
    username TEXT UNIQUE NOT NULL, 
    password TEXT NOT NULL,
    engName TEXT NOT NULL,
    krName TEXT NOT NULL,
    email TEXT UNIQUE NOT NULL,
    major TEXT NOT NULL,
    position TEXT NOT NULL,
    joindate DATETIME DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE events (
    eventID INTEGER PRIMARY KEY,
    eventName TEXT NOT NULL UNIQUE,
    eventDate DATETIME NOT NULL,
    eventLocation TEXT NOT NULL,
    userID INTEGER,
    FOREIGN KEY (userID) REFERENCES users(userID)
);