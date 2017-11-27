from forex_python.bitcoin   import BtcConverter
from forex_python.converter import CurrencyRates

class Py3status:
    cache_timeout = 600

    def rates(self):
        usd = CurrencyRates().get_rate('USD', 'TRY')
        eur = CurrencyRates().get_rate('EUR', 'TRY')
        btc = BtcConverter().get_latest_price('USD')

        return {
            'full_text': '$: ' + str(usd) + ' €: ' + str(eur) + ' ₿: ' + str(btc),
            'cached_until': self.py3.time_in(self.cache_timeout)
        }
