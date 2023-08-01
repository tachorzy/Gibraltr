const Destination = () => {
    return(
        <div>
            <form className = "text-semibolded text-center">
                <label className = "ml-1 relative block text-left" htmlFor = "destination">Where are you headed?</label><br/>
                <input className="rounded-2xl bg-grey-200 border-2 border-grey-200" type="text" id="destination" name="destination" placeholder="How about Morocco?"/>
            </form>
        </div>
    );
};

export default Destination;