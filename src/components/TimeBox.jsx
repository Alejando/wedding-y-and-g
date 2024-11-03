

const TimeBox = ({ time, label }) => {
  return (
    <div class="border border-solid border-accent p-1">
      <div class="border border-solid border-accent p-4">
        <span class="text-4xl text-secondary font-titles">{time}</span>
        <span class="block text-md md:text-xl font-body text-secondary">{label}</span>
      </div>
    </div>
  );
}

export default TimeBox;