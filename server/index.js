const express = require("express");
const cors = require('cors');

const app = express();

app.use(cors());

const data = Array.from({ length: 100 }, (_, index) => ({
    id: index + 1,
    name: `Item ${index + 1}`
}));

app.get('/api/data', (req, res) => {
    const page = parseInt(req.query.page);
    const pageSize = parseInt(req.query.pageSize);

    const startIndex = (page - 1) * pageSize;
    const endIndex = page * pageSize;

    const paginatedData = data.slice(startIndex, endIndex);
    res.send({ paginatedData });
});

app.listen(5000, () => {
    console.log("app is listening on port 5000");
});
