export default function handler(req, res) {
    const {name, message} =req.body
    



    res.status(200).json({ name: 'John Doe' })
  }
  