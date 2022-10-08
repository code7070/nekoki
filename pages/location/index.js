import { useEffect, useState } from "react";
import Dropdown from "../../components/Dropdown/Dropdown";
import provincesList from "../../helpers/provinces-list";
import HeadPage from "../HeadPage";
import WeatherSection from "./WeatherSection";

export function TitleSection({ title = "Title" }) {
  return <div className="font-semibold text-xl mb-4">{title}</div>;
}

export default function Location() {
  const [provinces, setProvinces] = useState(provincesList);
  const [selProv, setSelProv] = useState(false);

  const [city, setCity] = useState(false);
  const [selCity, setSelCity] = useState(false);

  const [district, setDistrict] = useState(false);
  const [selDis, setSelDis] = useState(false);

  const [geoLoc, setGeoLoc] = useState(false);
  const [address, setAddress] = useState(false);

  const apiLocation = "https://dev.farizdotid.com/api/daerahindonesia/";

  const openCageUrl = "https://api.opencagedata.com/geocode/v1/json";
  const openCageKey = "c711de77d4ad41c98a21fac20dd55d12";
  const geoReverse = `${openCageUrl}?key=${openCageKey}&pretty=1`;

  const provinceChange = (item) => {
    setSelProv(item);

    if (!item) {
      setCity(false);
      setSelCity(false);
      setDistrict(false);
      setSelDis(false);
    }
  };

  const cityChange = (item) => {
    setSelCity(item);

    if (!item) {
      setDistrict(false);
      setSelDis(false);
    }
  };

  const districtChange = (item) => {
    setSelDis(item);
  };

  const getNav = () => {
    const { geolocation: geo } = window.navigator;
    if (geo) {
      geo.getCurrentPosition(
        ({ coords }) => {
          setGeoLoc({ lat: coords.latitude, long: coords.longitude });
        },
        (error) => {
          Alert("Error get coordinates");
        }
      );
    } else alert("No Geolocation!");
  };

  useEffect(() => {
    if (selProv && !city) {
      fetch(`${apiLocation}kota?id_provinsi=${selProv.value}`)
        .then((res) => res.json())
        .then((res2) => {
          const val = res2.kota_kabupaten.map(({ id, nama }) => ({
            label: nama,
            value: id,
          }));
          setTimeout(setCity, 1000, val);
        });
    }
  }, [selProv, city]);

  useEffect(() => {
    if (selCity && !district) {
      fetch(`${apiLocation}kecamatan?id_kota=${selCity.value}`)
        .then((res) => res.json())
        .then((res2) => {
          const val = res2.kecamatan.map(({ id, nama }) => ({
            label: nama,
            value: id,
          }));
          setTimeout(setDistrict, 1000, val);
        });
    }
  }, [selCity, district]);

  useEffect(() => {
    if (geoLoc && geoLoc.lat && geoLoc.long) {
      fetch(`${geoReverse}&q=${geoLoc.lat},${geoLoc.long}`)
        .then((res) => res.json())
        .then((res2) => {
          console.log("Reverse resposnse: ", res2);
          setAddress(res2);
        });
    }
  }, [geoLoc, geoReverse]);

  const location = { selProv, selCity, selDis };

  return (
    <>
      <HeadPage />
      <div className="mx-auto max-w-3xl p-2">
        <h2 className="font-semibold text-2xl mb-10">
          [Research] -- Weather Service
        </h2>
        <div className="flex p-2 bg-yellow-50 rounded-xl">
          <div className="w-1/2 p-4">
            <div className="mb-8">
              <TitleSection title="Tentukan Lokasi" />
              <Dropdown
                title="Provinsi"
                list={provinces}
                onChange={provinceChange}
              />
              <Dropdown
                title="Kota / Kabupaten"
                list={city}
                onChange={cityChange}
                loading={selProv && !city}
              />
              {/* <Dropdown
                title="Kecamatan"
                list={district}
                onChange={districtChange}
              /> */}
            </div>
            <div className="mb-8">
              <TitleSection title="Otomatis" />
              <button className="btn" onClick={getNav}>
                Get navigator location
              </button>
              <div className="my-2 text-sm font-mono">
                {JSON.stringify(geoLoc)}
              </div>
              <div className="my-2 font-mono">
                {address && address?.results[0]?.formatted}
              </div>
            </div>
          </div>
          <WeatherSection location={location} coords={geoLoc} />
        </div>
      </div>
    </>
  );
}
