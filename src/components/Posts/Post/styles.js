import { makeStyles } from '@material-ui/core/styles';

export default makeStyles({
  touchingArea: {
    // backgroundColor: 'red',
    marginBottom: '5px',
    // marginTop: '55px'
  },
  media: {
    // height: 0,
    minHeight: '125px',
    paddingTop: '56.25%',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    backgroundBlendMode: '',
    filter: 'brightness(82%)',
    // opacity: '0.5',
  },
  border: {
    border: 'solid',
  },
  fullHeightCard: {
    height: '100%',
  },
  card: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    borderRadius: '15px',
    height: '100%',
    position: 'relative',
    
    cursor:'pointer',
    //cardActions no
  },
  overlay: {
    position: 'absolute',
    top: '20px',
    left: '20px',
    color: 'white',
  },
  overlay2: {
    position: 'absolute',
    // top: '20px',
    bottom: '5px',
    // right: '20px',
    left: '50%',
    color: 'white',
    // padding: '20px'
  },
  grid: {
    display: 'flex',
  },
  details: {
    display: 'flex',
    justifyContent: 'space-between',
    margin: '20px',
  },
  title: {
    padding: '0 16px',
  },
  cardActions: {
    padding: '0 16px 8px 16px',
    display: 'flex',
    justifyContent: 'space-between',
  },

});