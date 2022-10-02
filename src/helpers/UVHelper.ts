function getCaptionColor(uvi: number) {
  if (uvi < 2) {
    return '#345F17';
  } else if (uvi < 3) {
    return '#5BBD36';
  } else if (uvi < 4) {
    return '#E5F974';
  } else if (uvi < 5) {
    return '#E0DC47';
  } else if (uvi < 6) {
    return '#D9B73C';
  } else if (uvi < 7) {
    return '#D38530';
  } else if (uvi < 8) {
    return '#D06927';
  } else if (uvi < 9) {
    return '#D14B63';
  } else if (uvi < 10) {
    return '#CE3746';
  } else if (uvi < 11) {
    return '#EB3D32';
  } else if (uvi < 12) {
    return '#6661D9';
  } else if (uvi < 13) {
    return '#6743D2';
  } else if (uvi < 14) {
    return '#6425D8';
  } else if (uvi < 15) {
    return '#621099';
  } else if (uvi < 16) {
    return '#294EEE';
  } else if (uvi < 17) {
    return '#D4FDFF';
  }
}

export const UVHelper = {
  getCaptionColor,
};
