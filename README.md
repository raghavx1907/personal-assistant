# Weather Dashboard

A simple weather dashboard that fetches real-time weather data from a public weather API (OpenWeatherMap).

## Features
- 🌤️ Real-time weather information
- 📍 Search by city name
- 🌡️ Temperature, humidity, and wind speed
- 🎨 Clean and responsive UI
- 📱 Mobile-friendly design

## Setup

### Prerequisites
- Python 3.8+
- Flask
- Requests library
- OpenWeatherMap API Key (free at https://openweathermap.org/api)

### Installation

1. Clone the repository
```bash
git clone https://github.com/raghavx1907/personal-assistant.git
cd personal-assistant
```

2. Create a virtual environment
```bash
python -m venv venv
source venv/bin/activate  # On Windows: venv\Scripts\activate
```

3. Install dependencies
```bash
pip install -r requirements.txt
```

4. Create a `.env` file and add your API key
```bash
echo "OPENWEATHER_API_KEY=your_api_key_here" > .env
```

5. Run the application
```bash
python app.py
```

6. Open your browser and go to `http://localhost:5000`

## Usage

1. Enter a city name in the search box
2. Click "Get Weather" or press Enter
3. View the current weather conditions

## API Reference

- **OpenWeatherMap API**: https://openweathermap.org/api
- Current Weather: `/data/2.5/weather`

## Project Structure
```
personal-assistant/
├── app.py
├── requirements.txt
├── .env
└── templates/
    └── index.html
└── static/
    ├── css/
    │   └── style.css
    └── js/
        └── script.js
```

## License

MIT License