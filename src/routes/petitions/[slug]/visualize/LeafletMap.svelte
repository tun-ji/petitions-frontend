<script>
  import { onMount, onDestroy } from "svelte";
  export let data;
  let mapElement;
  let map;

  //@ts-ignore
  function getColorBySignatureCount(count) {
    const maxCount = 10;
    const threshold = maxCount / 6;

    if (count > 5 * threshold) {
      return "#d7191d";
    } else if (count > 4 * threshold) {
      return "#e07b31";
    } else if (count > 3 * threshold) {
      return "#f19e45";
    } else if (count > 2 * threshold) {
      return "#fde725";
    } else if (count > threshold) {
      return "#fff7bc";
    } else {
      return "#ffffff";
    }
  }

  function getStyle(feature) {
    return {
      weight: 1,
      opacity: 1,
      colour: "#000000",
      fillOpacity: 0.5,
      fillColor: getColorBySignatureCount(feature.properties.signatureCount),
    };
  }

  function popUp(feature, layer) {
    layer.bindPopup(
      `<h3> ${feature.properties.state}</h3> <p> ${feature.properties.signatureCount} ${feature.properties.signatureCount > 1 ? "signatures" : "signature"} </p>`,
    );
  }

  onMount(async () => {
    const leaflet = await import("leaflet");

    map = leaflet.map(mapElement).setView([9.07, 7.49], 7);

    const accessToken =
      "NFvmfk50j77v9znjjud04wsYRUWHzw4NUzCrtxkrMcSj1oHFyEeJkyS925U2n0Wh";
    console.log("Setting");
    leaflet
      .tileLayer(
        `https://tile.jawg.io/jawg-light/{z}/{x}/{y}{r}.png?access-token=${accessToken}`,
        {
          attribution:
            '<a href="https://jawg.io" title="Tiles Courtesy of Jawg Maps" target="_blank">&copy; <b>Jawg</b>Maps</a> &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
          maxZoom: 10,
          minZoom: 5,
        },
      )
      .addTo(map);
    leaflet
      .geoJSON(data.signatureData.geoJSON, {
        style: getStyle,
        onEachFeature: popUp,
      })
      .addTo(map);
  });

  onDestroy(async () => {
    if (map) {
      console.log("Unloading Leaflet map");
      map.remove();
    }
  });
</script>

<div bind:this={mapElement}></div>

<style lang="en">
  @import "leaflet/dist/leaflet.css";
  div {
    height: 100vh;
  }
</style>
