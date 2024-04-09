const fs = require("fs");



/**
 * files -> read, write, update , delete
 * directories ->  create and delete, list our differnet files nad folders
 * 
 * data -> stored in binary format(raw data) -> hexadecimal format -> buffer
 * encoding -> it tells how to interpret the data
 * - pdf 
 * - xlsx
 * - mp4, mkv
 * - utf-8, ascii
 * - jpeg, png, webp
 */

fs.writeFileSync("file.txt", "added some content");
fs.writeFileSync('file.txt', 'overwrittend content');
fs.appendFileSync('file.txt', 'added some content');
const content = fs.readFileSync('file.txt', 'utf-8');
// console.log(content);

fs.mkdirSync('nodeDirec');

fs.read
