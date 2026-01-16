import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

interface PostCardProps {
  title: string;
  body: string;
  onPress: () => void;
}

const PostCard: React.FC<PostCardProps> = ({ title, body, onPress }) => {
  return (
    <TouchableOpacity style={styles.card} onPress={onPress} activeOpacity={0.7}>
      <View style={styles.header}>
        <Text style={styles.label}>Title</Text>
      </View>
      <Text style={styles.title} numberOfLines={2}>{title}</Text>
      <View style={styles.divider} />
      <Text style={styles.bodyLabel}>Description</Text>
      <Text style={styles.body} numberOfLines={3}>{body}</Text>
    </TouchableOpacity>
  );
};

export default PostCard;

const styles = StyleSheet.create({
  card: {
    padding: 16,
    marginVertical: 6,
    backgroundColor: '#fff',
    borderRadius: 12,
    elevation: 2,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.08,
    shadowRadius: 3,
    borderLeftWidth: 4,
    borderLeftColor: '#a855f7',
  },
  header: {
    marginBottom: 6,
  },
  label: {
    fontSize: 11,
    fontWeight: '700',
    color: '#9333ea',
    letterSpacing: 0.5,
    textTransform: 'uppercase',
  },
  title: {
    fontSize: 16,
    fontWeight: '600',
    color: '#1f2937',
    marginBottom: 12,
    textTransform: 'capitalize',
  },
  divider: {
    height: 1,
    backgroundColor: '#f3f4f6',
    marginBottom: 8,
  },
  bodyLabel: {
    fontSize: 11,
    fontWeight: '600',
    color: '#6b7280',
    marginBottom: 4,
    textTransform: 'uppercase',
  },
  body: {
    fontSize: 14,
    color: '#6b7280',
    lineHeight: 20,
  },
});



