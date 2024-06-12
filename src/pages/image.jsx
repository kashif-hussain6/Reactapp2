

const Profile = ({data , date}) => {
  
  return (
    <> 
      <h1>{data.name}</h1>
      <img src={data.imageUrl} alt={'photo of ' + data.name} width={data.imageSize} height={data.imageSize} />
      {
        date && (
          <p>{date.toString()}</p> 
        )
      }
    </>
  );
};

export default Profile;
