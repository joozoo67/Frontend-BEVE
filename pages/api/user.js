export default function userHandler(req, res) {
    const {
      query: { locations, levels, categories },
      method,
    } = req
  
    switch (method) {
      case 'GET':
        // Get data from your database
        res.status(200).json({ locations, levels, categories })
        break
      case 'POST':
            // Get data from your database
        res.status(200).json({ locations, levels, categories })
        break
    //   case 'PUT':
    //     // Update or create data in your database
    //     res.status(200).json({ id, name: name || `User ${id}` })
    //     break
      default:
        res.setHeader('Allow', ['GET'])
        res.status(405).end(`Method ${method} Not Allowed`)
    }
  }