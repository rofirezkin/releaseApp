import React, {useState, useEffect} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {JadwalClean, JadwalProcess} from '../../../assets/icon';

const Link = ({bulan, bulanKedua}) => {
  const today = new Date();
  const month = today.getMonth();
  let convertBulan = bulan.toLowerCase();
  let convertBulanKedua = bulanKedua.toLowerCase();
  const GetJan = () => {
    if (month === 0) {
      if (convertBulan === 'januari' || convertBulanKedua === 'januari') {
        return <JadwalProcess style={styles.indikatorMonth} />;
      } else {
        return <JadwalClean style={styles.indikatorMonth} />;
      }
    } else {
      if (convertBulan === 'januari' || convertBulanKedua === 'januari') {
        return <JadwalProcess />;
      } else {
        return <JadwalClean />;
      }
    }
  };
  const GetFeb = () => {
    if (month === 1) {
      if (convertBulan === 'februari' || convertBulanKedua === 'februari') {
        return <JadwalProcess style={styles.indikatorMonth} />;
      } else {
        return <JadwalClean style={styles.indikatorMonth} />;
      }
    } else {
      if (convertBulan === 'februari' || convertBulanKedua === 'februari') {
        return <JadwalProcess />;
      } else {
        return <JadwalClean />;
      }
    }
  };
  const GetMar = () => {
    if (month === 2) {
      if (convertBulan === 'maret' || convertBulanKedua === 'maret') {
        return <JadwalProcess style={styles.indikatorMonth} />;
      } else {
        return <JadwalClean style={styles.indikatorMonth} />;
      }
    } else {
      if (convertBulan === 'maret' || convertBulanKedua === 'maret') {
        return <JadwalProcess />;
      } else {
        return <JadwalClean />;
      }
    }
  };
  const GetApr = () => {
    if (month === 3) {
      if (convertBulan === 'april' || convertBulanKedua === 'april') {
        return <JadwalProcess style={styles.indikatorMonth} />;
      } else {
        return <JadwalClean style={styles.indikatorMonth} />;
      }
    } else {
      if (convertBulan === 'april' || convertBulanKedua === 'april') {
        return <JadwalProcess />;
      } else {
        return <JadwalClean />;
      }
    }
  };
  const GetMei = () => {
    if (month === 4) {
      if (convertBulan === 'mei' || convertBulanKedua === 'mei') {
        return <JadwalProcess style={styles.indikatorMonth} />;
      } else {
        return <JadwalClean style={styles.indikatorMonth} />;
      }
    } else {
      if (convertBulan === 'mei' || convertBulanKedua === 'mei') {
        return <JadwalProcess />;
      } else {
        return <JadwalClean />;
      }
    }
  };
  const GetJun = () => {
    if (month === 5) {
      if (convertBulan === 'juni' || convertBulanKedua === 'juni') {
        return <JadwalProcess style={styles.indikatorMonth} />;
      } else {
        return <JadwalClean style={styles.indikatorMonth} />;
      }
    } else {
      if (convertBulan === 'juni' || convertBulanKedua === 'juni') {
        return <JadwalProcess />;
      } else {
        return <JadwalClean />;
      }
    }
  };
  const GetJul = () => {
    if (month === 6) {
      if (convertBulan === 'juli' || convertBulanKedua === 'juli') {
        return <JadwalProcess style={styles.indikatorMonth} />;
      } else {
        return <JadwalClean style={styles.indikatorMonth} />;
      }
    } else {
      if (convertBulan === 'juli' || convertBulanKedua === 'juli') {
        return <JadwalProcess />;
      } else {
        return <JadwalClean />;
      }
    }
  };
  const GetAgu = () => {
    if (month === 7) {
      if (convertBulan === 'agustus' || convertBulanKedua === 'agustus') {
        return <JadwalProcess style={styles.indikatorMonth} />;
      } else {
        return <JadwalClean style={styles.indikatorMonth} />;
      }
    } else {
      if (convertBulan === 'agustus' || convertBulanKedua === 'agustus') {
        return <JadwalProcess />;
      } else {
        return <JadwalClean />;
      }
    }
  };
  const GetSep = () => {
    if (month === 8) {
      if (convertBulan === 'september' || convertBulanKedua === 'september') {
        return <JadwalProcess style={styles.indikatorMonth} />;
      } else {
        return <JadwalClean style={styles.indikatorMonth} />;
      }
    } else {
      if (convertBulan === 'september' || convertBulanKedua === 'september') {
        return <JadwalProcess />;
      } else {
        return <JadwalClean />;
      }
    }
  };
  const GetOkt = () => {
    if (month === 9) {
      if (convertBulan === 'oktober' || convertBulanKedua === 'oktober') {
        return <JadwalProcess style={styles.indikatorMonth} />;
      } else {
        return <JadwalClean style={styles.indikatorMonth} />;
      }
    } else {
      if (convertBulan === 'oktober' || convertBulanKedua === 'oktober') {
        return <JadwalProcess />;
      } else {
        return <JadwalClean />;
      }
    }
  };
  const GetNov = () => {
    if (month === 10) {
      if (convertBulan === 'november' || convertBulanKedua === 'november') {
        return <JadwalProcess style={styles.indikatorMonth} />;
      } else {
        return <JadwalClean style={styles.indikatorMonth} />;
      }
    } else {
      if (convertBulan === 'november' || convertBulanKedua === 'november') {
        return <JadwalProcess />;
      } else {
        return <JadwalClean />;
      }
    }
  };
  const GetDes = () => {
    if (month === 11) {
      if (convertBulan === 'desember' || convertBulanKedua === 'desember') {
        return <JadwalProcess style={styles.indikatorMonth} />;
      } else {
        return <JadwalClean style={styles.indikatorMonth} />;
      }
    } else {
      if (convertBulan === 'desember' || convertBulanKedua === 'desember') {
        return <JadwalProcess />;
      } else {
        return <JadwalClean />;
      }
    }
  };
  return (
    <View style={styles.boxCal}>
      <View style={{flexDirection: 'row'}}>
        <View style={styles.jadwal}>
          <Text style={styles.textJadwal}>Jan</Text>
          <View style={styles.tanda}>
            <GetJan />
          </View>
        </View>
        <View style={styles.jadwal}>
          <Text style={styles.textJadwal}>Feb</Text>
          <View style={styles.tanda}>
            <GetFeb />
          </View>
        </View>
        <View style={styles.jadwal}>
          <Text style={styles.textJadwal}>Mar</Text>
          <View style={styles.tanda}>
            <GetMar />
          </View>
        </View>
        <View style={styles.jadwal}>
          <Text style={styles.textJadwal}>Apr</Text>
          <View style={styles.tanda}>
            <GetApr />
          </View>
        </View>
        <View style={styles.jadwal}>
          <Text style={styles.textJadwal}>Mei</Text>
          <View style={styles.tanda}>
            <GetMei />
          </View>
        </View>
        <View style={styles.jadwal}>
          <Text style={styles.textJadwal}>Jun</Text>
          <View style={styles.tanda}>
            <GetJun />
          </View>
        </View>
      </View>
      <View style={{flexDirection: 'row', paddingTop: 10}}>
        <View style={styles.jadwal}>
          <Text style={styles.textJadwal}>Jul</Text>
          <View style={styles.tanda}>
            <GetJul />
          </View>
        </View>
        <View style={styles.jadwal}>
          <Text style={styles.textJadwal}>Agu</Text>
          <View style={styles.tanda}>
            <GetAgu />
          </View>
        </View>
        <View style={styles.jadwal}>
          <Text style={styles.textJadwal}>Sep</Text>
          <View style={styles.tanda}>
            <GetSep />
          </View>
        </View>
        <View style={styles.jadwal}>
          <Text style={styles.textJadwal}>Okt</Text>
          <View style={styles.tanda}>
            <GetOkt />
          </View>
        </View>
        <View style={styles.jadwal}>
          <Text style={styles.textJadwal}>Nov</Text>
          <View style={styles.tanda}>
            <GetNov />
          </View>
        </View>
        <View style={styles.jadwal}>
          <Text style={styles.textJadwal}>Des</Text>
          <View style={styles.tanda}>
            <GetDes />
          </View>
        </View>
      </View>
    </View>
  );
};

export default Link;

const styles = StyleSheet.create({
  boxCal: {
    paddingTop: 10,

    width: 342,
    height: 150,
    backgroundColor: '#FFFCFC',
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.27,
    shadowRadius: 4.65,

    elevation: 6,
  },
  jadwal: {
    textAlign: 'center',
    flex: 1,
    height: 50,
  },
  textJadwal: {
    textAlign: 'center',
  },
  tanda: {
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop: 10,
  },
  indikatorMonth: {
    backgroundColor: '#C9C0C0',
    borderRadius: 8,
  },
});
