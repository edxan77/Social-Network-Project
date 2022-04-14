import { Box } from "@mui/system";
// import { Typography } from "@mui/material";s
import Event from './Event';

function Events(){
    return (
        <div style={{marginBottom:"150px"}}>
            {/* <Typography variant="h4" color="text.secondary" style={{marginTop:'0px'}}>
               Interesting Events
            </Typography> */}
            <Box sx={{
                width:'1200px',
                display:'flex',
                justifyContent:'center',
                alignItems:'center',
                gap:'30px',
                flexWrap:'wrap',
                boxShadow:' rgba(0, 0, 0, 0.02) 0px 1px 3px 0px, rgba(27, 31, 35, 0.15) 0px 0px 0px 1px',
                borderRadius:'20px',
                backgroundColor:'#fff',
                margin:'100px auto',
                padding:'40px 20px',
                marginBottom:'100px',
                zIndex:'-1'
            }}>
                <Event src="https://scontent.fevn6-3.fna.fbcdn.net/v/t39.30808-6/277006247_468928564677084_783513602880443772_n.jpg?_nc_cat=106&ccb=1-5&_nc_sid=340051&_nc_ohc=sD9bEv3JjfUAX9GQKYN&_nc_ht=scontent.fevn6-3.fna&oh=00_AT-hKm6YxA7a5oyXZ2exs027l7yKow-MAa9ZHvtlJr8_4Q&oe=625C32C9" 
                    day='СУББОТА, 23 АПРЕЛЯ 2022 Г. В 15:00' 
                    title='Արթուր Թարխանյանի ամենահայտնի նախագծերը' 
                    desc='Հայկական մոդեռնիզմի կենտրոն-թանգարանում կկայանա հանդիպում՝ նվիրված Արթուր
                    Թարխանյանի 90-ամյակին։ Միջոցառման ընթացքում կենտրոնի հիմնադիր-տնօրեն Անահիտ Թարխանյանը կներկայացնի ճարտարապետության
                    վարպետ՝ Արթուր Թարխանյանի ամենահայտնի նախագծերը։'
                />
                <Event src="https://scontent.fevn6-1.fna.fbcdn.net/v/t39.30808-6/277781957_1298539633888819_3494669410837192137_n.jpg?_nc_cat=103&ccb=1-5&_nc_sid=340051&_nc_ohc=KIXC5fciiHwAX9FtzlR&_nc_oc=AQmNgYPHqwnze4MkN-MP0Z4E4HGfLTX49tFSH8LhzWXLfGlCmHg-MgW8uTVBygZQpUg&tn=W6Ghdw5gO2idvfQw&_nc_ht=scontent.fevn6-1.fna&oh=00_AT_LYtRc_gP5uRnC_MFMERfRC8oPGoflQn0BpjUcDbCUMA&oe=625C9E82" 
                    day='СУББОТА, 14 МАЯ 2022 Г. В 19:00' 
                    title='Aznavour Classique. Ազնավուրը՝ դասական հնչողությամբ' 
                    desc=' «Aznavour Classique. Ազնավուրը՝ դասական հնչողությամբ» համերգային ծրագիրը մեկնարկում է Հայաստանում, 
                    այնուհետև շրջագայության մեկնի աշխարհի լավագույն համերգասրահներ։'
                />
                <Event src="https://scontent.fevn6-3.fna.fbcdn.net/v/t39.30808-6/277584343_1185000695232888_1645948184915044572_n.jpg?_nc_cat=108&ccb=1-5&_nc_sid=340051&_nc_ohc=WlUTfMsQZnQAX8bPBeb&_nc_ht=scontent.fevn6-3.fna&oh=00_AT-bEAFWcOmQFgI4daqPEHA3MuDwwvvYqeb8qLHpzFRCrQ&oe=625D5313" 
                    title='День Армянского Вина (Dvin Music Hall)' 
                    day='ПЯТНИЦА, 22 АПРЕЛЯ 2022 Г. С 14:00 ДО 20:00'
                    desc='Սիրու՞մ եք գինի։ Եկեք միասին փորձենք հայկական գինին, ծանոթանանք հայկական գինեգործությանը և ուղղակի անցկացնենք լավ ժամանակ։
                    Սա հետաքրքիր ճանապարհորդություն է, որը երկար տարիներ կմնա Ձեր հիշողության մեջ։'
                />
                <Event src="https://scontent.fevn6-1.fna.fbcdn.net/v/t39.30808-6/277300616_5085633334809072_2260054809999621420_n.jpg?stp=dst-jpg_p960x960&_nc_cat=100&ccb=1-5&_nc_sid=340051&_nc_ohc=NFJc2W2l1cYAX8tCjya&tn=W6Ghdw5gO2idvfQw&_nc_ht=scontent.fevn6-1.fna&oh=00_AT-o_jDdvNWnk9CQJBS80NT48XLjX9VEbU5T0lObAwknlQ&oe=625DC2D4" 
                    day='ВТОРНИК, 26 АПРЕЛЯ 2022 Г. В 19:00'
                    title='Կիբեռանվտանգության ճամբար ՀՀ Կենտրոնական Բանկի հետ' 
                    desc='CyHub Armenia նախաձեռնության շրջանակում Մայքրոսոֆթ ինովացիոն կենտրոնը ՀՀ Կենտրոնական բանկի
                     հետ մշակել է միջազգային չափանիշներին համապատասխան Կիբեռանվտանգության ճամբար:'
                />
                <Event src="https://scontent.fevn6-3.fna.fbcdn.net/v/t39.30808-6/277674491_5269642856427617_4198866977384810178_n.jpg?stp=dst-jpg_p960x960&_nc_cat=106&ccb=1-5&_nc_sid=340051&_nc_ohc=Ps3t3-Q6NeUAX9Xxy6s&_nc_ht=scontent.fevn6-3.fna&oh=00_AT9e6mr_hKTQS432SpFw_gt9RWt1Q7wck-LOoRsLsxZNGg&oe=625D4E21" 
                    day='С 16:00 18 АПР ДО 18:00 22 АПР' 
                    title='Synergy Student Week 2022'
                    desc='Մեկնարկում է #Synergy-ի և ուսանողների ամենասիրելի շաբաթը: Մեկ շաբաթում 10 տեխնոզրույց առաջնակարգ մասնագետների հետ, բազմաշերտ ՏՏ ոլորտում մասնագիտական կարիերա սկսելու
                     հնարավորություն, պրակտիկ գիտելիքների մեծ չափաբաժին. այս ամենը հնարավոր է #SynergyStudentWeek2022-ին '
                />
            </Box>
        </div>
        
      );
}

export default Events;