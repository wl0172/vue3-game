export const hpSetting = ({ hp, hp_max }) => {
  if (hp == hp_max) {
    return 100
  } else if(hp > 0) {
    return Number(((hp/hp_max)*100).toFixed(2))
  } else {
    return 0
  }
}