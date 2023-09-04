
import path from "path";
import { fileURLToPath } from "url";
import fs from 'fs.promises'

const __filePath = fileURLToPath(import.meta.url)
const __fichier = path.join(__filePath, "../../DB.json")

export function loadData() {
    const existingData = fs.readFile(__fichier, "utf-8")
    return JSON.stringify(existingData)
}

export function saveData (data) {
    const existingData = fs.readFile(__fichier, "utf-8")
    const data = fs.writeFile(existingData, data)
}