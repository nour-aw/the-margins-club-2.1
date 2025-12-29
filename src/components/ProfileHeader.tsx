interface ProfileHeaderProps {
  name: string;
  bio: string;
  avatarUrl?: string;
}

const ProfileHeader = ({ name, bio, avatarUrl }: ProfileHeaderProps) => {
  return (
    <div className="flex flex-col items-center text-center">
      {/* Avatar */}
      <div className="animate-scale-in relative mb-6">
        <div className="gradient-border h-28 w-28 overflow-hidden rounded-full">
          {avatarUrl ? (
            <img
              src={avatarUrl}
              alt={name}
              className="h-full w-full object-cover"
            />
          ) : (
            <div className="flex h-full w-full items-center justify-center bg-secondary text-3xl font-bold text-primary">
              {name.charAt(0).toUpperCase()}
            </div>
          )}
        </div>
        {/* Status indicator */}
        <div className="absolute bottom-1 right-1 h-5 w-5 rounded-full border-4 border-background bg-green-500" />
      </div>

      {/* Name */}
      <h1
        className="animate-fade-up mb-2 text-3xl font-bold text-foreground"
        style={{ animationDelay: "100ms" }}
      >
        {name}
      </h1>

      {/* Bio */}
      <p
        className="animate-fade-up max-w-xs text-muted-foreground"
        style={{ animationDelay: "200ms" }}
      >
        {bio}
      </p>
    </div>
  );
};

export default ProfileHeader;
