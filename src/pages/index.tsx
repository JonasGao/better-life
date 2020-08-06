import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import { ThemeProvider } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';
import {
  Work,
  LocalHospital,
  Home,
  People,
  AttachMoney,
  MenuBook,
  SportsEsports,
  Favorite,
} from '@material-ui/icons';
import { InputAdornment, List, ListItem } from '@material-ui/core';
import useTheme from '@/utils/useTheme';
import useData from '@/data/useData';

const TextItem = (props: {
  children: any;
  label: string;
  value: string;
  onChange: any;
}) => {
  return (
    <ListItem>
      <TextField
        label={props.label}
        variant="filled"
        value={props.value}
        onChange={event => props.onChange(event.target.value)}
        fullWidth
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">{props.children}</InputAdornment>
          ),
        }}
      />
    </ListItem>
  );
};

export default () => {
  const theme = useTheme();

  const [work, setWork] = useData('work');
  const [health, setHealth] = useData('health');
  const [family, setFamily] = useData('family');
  const [people, setPeople] = useData('people');
  const [attachmoney, setAttachmoney] = useData('attachmoney');
  const [learn, setLearn] = useData('learn');
  const [relax, setRelax] = useData('relax');
  const [soul, setSoul] = useData('soul');

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Container>
        <Grid container spacing={2} justify="center">
          <Grid item xs={10} xl={5} md={6} sm={8}>
            <List component="nav" aria-label="main mailbox folders">
              <TextItem label={'事业'} value={work} onChange={setWork}>
                <Work />
              </TextItem>
              <TextItem label={'健康'} value={health} onChange={setHealth}>
                <LocalHospital />
              </TextItem>
              <TextItem label={'家庭'} value={family} onChange={setFamily}>
                <Home />
              </TextItem>
              <TextItem label={'人脉'} value={people} onChange={setPeople}>
                <People />
              </TextItem>
              <TextItem
                label={'理财'}
                value={attachmoney}
                onChange={setAttachmoney}
              >
                <AttachMoney />
              </TextItem>
              <TextItem label={'学习'} value={learn} onChange={setLearn}>
                <MenuBook />
              </TextItem>
              <TextItem label={'休闲'} value={relax} onChange={setRelax}>
                <SportsEsports />
              </TextItem>
              <TextItem label={'心灵'} value={soul} onChange={setSoul}>
                <Favorite />
              </TextItem>
            </List>
          </Grid>
        </Grid>
      </Container>
    </ThemeProvider>
  );
};
