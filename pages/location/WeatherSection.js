import Image from "next/image";
import { useEffect, useState } from "react";
import { TitleSection } from ".";
import { formatAddressName, getTightDateTime } from "../../helpers/util";

const iconWeatherMap = (weather) => {
  if (!weather) return "cerah";
  if (weather === "Cerah Berawan") return "cerah-berawan";
  else if (weather === "Kabut" || weather === "Berawan") return "berawan";
  else if (weather === "Cerah") return "cerah";
  else if (weather === "Hujan") return "hujan";
};

export default function WeatherSection({
  location = { selProv: false, selCity: false },
}) {
  const [weather, setWeather] = useState(false);
  const [temperature, setTemperature] = useState(false);

  const weatherAPI = "https://cuaca-gempa-rest-api.vercel.app/weather/";

  useEffect(() => {
    const selProv = location.selProv;
    const selCity = location.selCity;

    const timeHook = getTightDateTime();

    const reducer = (array = []) => {
      if (!array || array.length < 1) return "";
      return array.reduce(function (prev, curr) {
        const prevTime = parseInt(prev.datetime, 10);
        const currTime = parseInt(curr.datetime, 10);
        const comparing =
          Math.abs(currTime - timeHook) < Math.abs(prevTime - timeHook);
        return comparing ? curr : prev;
      });
    };

    if (selProv && selProv.label && selCity.label) {
      const valProv = formatAddressName(selProv.label);
      let tailUrl = valProv;
      console.log("City: ", selCity);
      if (selCity && selCity.label) {
        const valCity = formatAddressName(selCity.label);
        tailUrl = `${valProv}/${valCity}`;
      }

      fetch(`${weatherAPI}${tailUrl}`)
        .then((res) => res.json())
        .then((res2) => {
          console.log("Weather response: ", res2);

          if (res2?.data?.params) {
            const par = res2.data.params;

            const temph = reducer(par[5].times);
            if (temph) setTemperature(temph);

            const weath = reducer(par[6].times);
            if (weath) setWeather(weath);
          }
        });
    } else {
      setWeather(false);
      setTemperature(false);
    }
  }, [location.selProv, location.selCity]);

  return (
    <div className="w-1/2 p-4">
      <TitleSection title="Prakiraan Cuaca:" />

      {location.selProv && location.selCity && !weather && !temperature && (
        <div className="my-4 animate-pulse">
          <div className="my-2 h-4 bg-slate-300 rounded-xl" />
          <div className="my-2 h-4 bg-slate-300 rounded-xl" />
        </div>
      )}

      <div className="text-center">
        {weather && (
          <div className="w-full relative">
            <Image
              width={100}
              height={100}
              src={`/weather-icon/${iconWeatherMap(weather.name)}.png`}
              alt={weather.name}
            />
          </div>
        )}
        {temperature && (
          <div className="text-3xl font-semibold">{temperature.celcius}</div>
        )}
        {weather && <div className="text-lg font-semibold">{weather.name}</div>}
      </div>
    </div>
  );
}
